# React Project Template

# 概要

Webpack を使った create-react-app を使わないプロジェクトテンプレート

# node install

```shell
npm i
```
# start command

```shell
npm run start
npx tailwindcss -i ./src/assets/style.template.css -o ./src/assets/style.css --watch
```

※上記コマンドはターミナル分割して同時に実行


```tsx
export const App = () => {
  return <div>hogehgoe</div>;
};

export default App;
```

```tsx
export default function App() {
  return <div>hgoehoge</div>;
}
```


PJ概要
- TODO一覧を確認できる
  - 状態でフィルタできる(status)
  - 期限日でフィルタできる
    - 期限切れのものは背景を赤色
- TODOを追加できる
  -TODOはサブタスクを追加できる(subtasks)
  - TODOは 完了 処理中 未処理の3状態がある
  - 期限日を設定できる
    - DatePickerで日時選択


変数名: 型

id: number
title: string
status: StatusType
dueDate: Date

return のなかではIFやFORは使えない