# 使用するNode.jsのバージョンを指定
ARG NODE_VER
FROM node:${NODE_VER}

# 作業ディレクトリを設定
WORKDIR /home/node/app

# `node`ユーザーとグループが`/home/node/app`ディレクトリの所有者になるように設定
# これにより、`node`ユーザーがこのディレクトリ内でファイルの読み書きができるようになります
RUN chown -R node:node /home/node/app

# 非rootユーザー`node`に切り替え
USER node

# ディレクトリの権限を設定後に依存関係をインストール
COPY package.json yarn.lock ./
RUN yarn install

# アプリケーションのソースコードをコピー
COPY --chown=node:node . .

# 開発サーバーを起動
CMD ["yarn", "dev"]

