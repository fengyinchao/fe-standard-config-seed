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

- step1: install vigor-cli

```shell
npm i -g vigor-cli && vigor create
```

- step2:select fe-standard-config-seed template

- step3:add your code

```shell
//...
git add .
```

- step4:commit
  please use `git cz` insteadof `git commit`

```shell
git cz
```

this will check eslint、stylelint and commitlint

- step5:generate changelog(if you need)

```shell
npm run release
```
