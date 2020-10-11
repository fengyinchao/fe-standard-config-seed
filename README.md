# fe-standard-config-seed

这是一个集多数常用配置于一身的前端项目模版，包括

- lerna(please switch to lerna branch)
- typescript
- eslint
- stylelint
- commitlint
- prettier
- husky
- changelog
- editorconfig
- standversion
- license

## How To Use

- step1: install

```shell
npm i -g vigor-cli && vigor create
```

- step2:select fe-standard-config-seed
- step3:init

```shell
git init
```

- step4:add your code

```shell
//...
git add .
```

- step5:commit

```shell
git cz
```

this will check eslint、stylelint and commitlint

- step6:generate changelog

```shell
npm run release
```
