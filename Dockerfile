FROM caddy

# 安装 jq 工具
RUN apk add --no-cache jq

# 复制资源文件
COPY ./resource/public /var/www/html
COPY ./resource/Caddyfile /etc/caddy/Caddyfile

# 设置环境变量
ENV ASSET_PREFIX http://example.com

# 读取 version.json 中的 cacheBuildId
RUN cacheBuildId=$(jq -r '.cacheBuildId' /var/www/html/version.json) && \
    # 删除 /var/www/html/template 目录下除 cacheBuildId 同名目录外的所有目录
    find /var/www/html/template -mindepth 1 -maxdepth 1 ! -name "$cacheBuildId" -exec rm -rf {} + && \
    # 将 ./resource/public/assets/cacheBuildId 目录下的文件复制到一个临时目录
    mkdir -p /tmp/assets && \
    cp -r /var/www/html/assets/$cacheBuildId/* /tmp/assets/ && \
    # 清空 /var/www/html/assets 目录
    rm -rf /var/www/html/assets/* && \
    # 将临时目录中的文件复制回 /var/www/html/assets 目录中
    cp -r /tmp/assets/* /var/www/html/assets/ && \
    # 删除临时目录
    rm -rf /tmp/assets

# 替换占位符并启动 caddy
CMD find /var/www/html -type f \( -name "*.html" -o -name "*.js" -o -name "*.css" \) -exec sed -i "s|{{.assetPrefix}}|${ASSET_PREFIX}|g" {} + && caddy run --config /etc/caddy/Caddyfile