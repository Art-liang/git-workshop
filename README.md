##筆記

舉例要增加詩葶的資料夾分支
以下步驟

1. $git clone URL (注意是點選HTTP)
2. $git branch punpun /建立分支
3. $git switch punpun 分支名稱
4. touch punpunsohard.php /建立了胖胖很難的php文件檔案
5. git status /看狀態
6. git add .
7. git commit -m "add"
8. git push -u origin punpun

```
. 現在的檔案夾位置
.. 上一層案夾
~ 我的目錄，就是目前這個使用者的目錄，像是 /Users/aaa 之類的
## 分支/push分支

```
git push -u origin

//如果是新建分支第一次push
git push -u origin 分支名
git push --set-upstream origin 分支名

//以後持續記錄新版本就可以直接push
git push

```

```
第一次推 feat-login 上去 github
```bash=
git push -u origin feat-login
git push -u origin

//如果是新建分支第一次push
git push -u origin 分支名
git push --set-upstream origin 分支名

以後持續記錄新版本就可以直接push
git push


## 指令看這邊

```bash=
touch 可以建立檔案
git branch(列出分支)
switch(切換分支)
touch a.txt
ls 列出桌面檔案
. 現在的檔案夾位置
.. 上一層案夾
~ 我的目錄，就是目前這個使用者的目錄，像是 /Users/aaa 之類的

##12/25 ~ 12/26 上課心得

## 老師從很淺的方式開始一步一步帶大家做
不要害怕去提問!你有的問題其他人也會有～
某次老師在課堂上說：「有些同學學三分鐘會的東西，有些同學需要三十分鐘才學會，他們的差別在哪
沒有差別因為它們都學會了」這句話一直烙印在自己腦海裡，在前期時想跟另外一位學設計的同學退訓
下課看著程式碼哭，跟以往在學設計時如魚得水的經驗完全不同。
所幸遇到很好的組，以及老師願意在課堂上、午休期間與同學一起尋找答案、解決問題，
這是目前我在資策會中少數遇到老師願意這樣做的，現在自己在心態上也會做調整，真的很感謝老師您。
