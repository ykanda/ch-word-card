ch-word-card
================

Chinese word card


For developers
--------

### Requirements

* Vagrant
  * vagrant-hostsupdater
* Homebrew


### Installation

    $ brew install npm      # install node.js + npm
    $ npm install           # install JavaScript packages
    $ npm install -g gulp   # install gulp (CLI)


### Build and running 

ビルドツールとして gulp を利用しています。
リポジトリルートで `gulp` コマンドを実行すると、各種ファイルのコンパイル処理などを経て、
`dest` フォルダに成果物が出来上がります。

動作を確認するために Vagrant による環境を準備してあります。
リポジトリルートに Vagrantfile があるため、ここで `vagrant up --provision` コマンドを実行します。

vagrant-hostsupdater プラグインを利用するようになっているため、
あらかじめプラグインをインストールしておいてください。
このプラグインの動作により、システムの hosts ファイルを一時的に書き換え、
cwc.ykanda.net というアドレスでブラウザなどからアクセスできるようになります。


<!-- vim: set ft=markdown: -->
