# vuetest
test 123

add dev branch

I del my local branch, and add branch new "dev" for "remote/origin/dev"

    git branch -d dev
    git checkout -b dev origin/dev

Then check the branch:

    git branch -a

Create a new branch named "test". Then push it to the github.

    git checkout -b test
    git push origin test:test

删除远程分支
    git push --delete origin xxx //删除远程上xxx的分支

Your branch is based on 'origin/test', but the upstream is gone.

  (use "git branch --unset-upstream" to fixup)

fatal: The current branch test has no upstream branch.
To push the current branch and set the remote as upstream, use
    
    git push --set-upstream origin test

#随即漫步的傻瓜
#黑天鹅
#反脆弱
#非对称风险



