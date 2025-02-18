---
id: team
title: Teamwork
hide_title: false
hide_table_of_contents: false
sidebar_label: Teamwork
sidebar_position: 10
pagination_label: Teamwork
# custom_edit_url: https://bsamadi.github.io/coding/docs/10-team.md
description: GitHub is your friend.
keywords:
  - GitHub
  - Reproducibility
  - Markdown
image: "img/logo.svg"
slug: /team
---

- Teamwork
- Version Control System
  - نرم‌افزار
  - داده ([اصول FAIR](https://the-turing-way.netlify.app/reproducible-research/rdm/rdm-fair.html))
- چرخ را از اول اختراع نکنید.
- نرم‌افزار متن‌باز
- [پژوهش متن‌باز](https://the-turing-way.netlify.app/reproducible-research/open.html)
- طراحی پودمانی ([modular](http://www.mechatronics3d.com/slide/vp2014/index.html#/section))
- گیتهاب دوست شما است. دوستان دیگری هم دارید: Gitlab و Bitbucket. اما بیشتر آدم‌ها روی گیتهاب هم هستند.
- مشکلات نرم‌افزاری:
  - قبلا کار می‌کرد
  - روی کامپیوتر من کار می‌کند
  - آخرین نسخه کدام بود؟
- [قابلیت بازتولید](https://the-turing-way.netlify.app/reproducible-research/renv/renv-options.html)

# سرنخ‌ها

<div dir="auto">

- [The Turing Way](https://the-turing-way.netlify.app/welcome)
- [Reproducibility of Scientific Results](https://plato.stanford.edu/entries/scientific-reproducibility/)
- [Start a podcast](https://the-turing-way.netlify.app/communication/podcasts.html)

## Version Control for Code
- [Getting started with GitHub](https://the-turing-way.netlify.app/collaboration/github-novice.html)
- [Version control](https://the-turing-way.netlify.app/reproducible-research/vcs.html)
- [git-scm](https://git-scm.com/book/en/v2)
- [version control](https://web.mit.edu/6.031/www/sp20/classes/05-version-control/)
-   [Install the latest git](https://itsfoss.com/install-git-ubuntu/)
-   [Setting your username in Git](https://help.github.com/articles/setting-your-username-in-git/)
-   [Setting your commit email address in Git](https://help.github.com/articles/setting-your-commit-email-address-in-git/)
-   git add .
-   git add myfolder/.
-   Change the username:
    -   git config --global user.name "Behzad Samadi"
    -   git config --global user.email "name@mail.com"
    -   git remote -v
    -   git remote set-url origin https://username@github.com/ros-agriculture/ros-a.git
-   Delete all local branches: `git remote prune origin`
-   [Git push to GitHub Pages](https://devhints.io/travis-gh-pages)
-   [Testing your SSH connection](https://help.github.com/en/github/authenticating-to-github/testing-your-ssh-connection)
-   [Work with multiple SSH connections](https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574)
-   [How to manage multiple GitHub accounts on a single machine with SSH keys](https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/)
-   [Working with forks](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/working-with-forks)
-   [git push --tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging#:~:text=Sharing%20Tags&text=You%20will%20have%20to%20explicitly,git%20push%20origin%20.&text=If%20you%20have%20a%20lot,to%20the%20git%20push%20command.)
- [Removing a local commit](https://stackoverflow.com/questions/4850717/how-to-cancel-a-local-git-commit): `git reset HEAD~1` ([Undo Last Git Commit with reset](https://devconnected.com/how-to-undo-last-git-commit/))
- [The Ultimate Guide to Git Credentials](https://coolaj86.com/articles/vanilla-devops-git-credentials-ultimate-guide/)
- Update the origin: `git remote set-url origin <address>`
- Adding a new origin to a repository:
   - `git remote add origin <address>`
   - `git push origin <branchname>`
- [Adding a new tag](https://devconnected.com/how-to-create-git-tags/):
   - `git tag v0.0.1`
   - `git push origin v0.0.1`
- [Learn git branching](https://learngitbranching.js.org/)

### Rebase
- [Git Interactive Rebase, Squash, Amend and Other Ways of Rewriting History](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)

### Pruning
- [How to Use prune to Clean Up Remote Branches in Git](https://www.git-tower.com/learn/git/faq/cleanup-remote-branches-with-git-prune/)
- [Pruning](https://git-scm.com/docs/git-fetch)
- [Fast file removal](https://stackoverflow.com/questions/2100907/how-to-remove-delete-a-large-file-from-commit-history-in-git-repository)
- [Delete the git history](https://www.willandskill.se/en/deleting-your-git-commit-history-without-removing-repo-on-github-bitbucket/)
- [bfg-repo-cleaner is much faster than pruning](https://rtyley.github.io/bfg-repo-cleaner/#usage)

### Large files
- [An open source Git extension for versioning large files](https://git-lfs.github.com/)
- [Manage large files with Git Large File Storage (LFS)](https://support.atlassian.com/bitbucket-cloud/docs/manage-large-files-with-git-large-file-storage-lfs/)
- [Measuring the many sizes of a Git repository](https://github.blog/2018-03-05-measuring-the-many-sizes-of-a-git-repository/)
- [git lfs on AWS S3](https://blog.dermah.com/2020/05/26/how-to-be-stingy-git-lfs-on-your-own-s3-bucket/)

### Submodules

-   [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
-   Sync submodules: `git submodule sync --recursive`
-   Update submodules: `git submodule update --init --recursive`

## Version Control for Data
- [Datalad](https://www.datalad.org/)
- [Data Verion Control (DVC)](https://dvc.org/)
- [A FAIRy tale](https://zenodo.org/record/2248200)

## Open Source

- [Open source guide](https://opensource.guide/)
- [Open source agenda](https://www.opensourceagenda.com/)

## Coding interviews

- [Awesome interview questions](https://github.com/DopplerHQ/awesome-interview-questions)

## Software Project Management

-   [Aha!](https://www.aha.io/)
-   [User story cards](https://www.agilebusiness.org/page/ProjectFramework_15_RequirementsandUserStories)
-   [Miro](https://miro.com/)
-   [Gloomaps](https://www.gloomaps.com/)

## IDE
- [Eclipse Codewind](https://www.eclipse.org/codewind/)
- [Eclipse Che: The Kubernetes-Native IDE for Developer Teams](http://www.eclipse.org/che/)
- [Theia IDE](https://theia-ide.org/)
- [Eclipse Theia](https://github.com/eclipse-theia/theia)
- [EditorConfig](https://editorconfig.org/)

## Diagrams and charts

-  [Gantt chart using Mermaid](https://mermaid-js.github.io/mermaid/#/)

## Whiteboards

-  [Trello](https://trello.com)
-  [Best online whiteboards](https://zapier.com/blog/best-online-whiteboard/)

## Visual Studio Code

* [Visual Studio Code is unable to watch for file changes in this large workspace](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)

### Tutorials

*   [Understanding git](https://hackernoon.com/understanding-git-fcffd87c15a3)

## Bitbucket

*   [Bitbucket Authentication, 2FA and OAuth](https://github.com/microsoft/Git-Credential-Manager-for-Windows/blob/master/Docs/Bitbucket.md)

## Makefile

*   [Makefile for lazy developers](https://localheinz.com/blog/2018/01/24/makefile-for-lazy-developers/)
*   [Make Makefile](https://wilsonmar.github.io/make-makefile/)
*   [Makefiles and Visual Studio Code](https://stackoverflow.com/questions/34937092/why-does-visual-studio-code-insert-spaces-when-editing-a-makefile-and-editor-in/56060185)

## Documentation

*   [Docusaurus](https://docusaurus.io/en/)
*   [Forestry](https://forestry.io/)
*   [Hugo](https://gohugo.io/)
    *   Add a submodule: git submodule add https://github.com/hbpasti/heather-hugo themes/heather-hugo
    *   Update a submodule: git submodule update --init --recursive
    *   List submodules: git config --file .gitmodules --name-only --get-regexp path
*   [VuePress](https://vuepress.vuejs.org/)
*   [ReLaXed](https://github.com/RelaxedJS/ReLaXed)

## Design

*   [Haiko](https://www.haiku.ai/)

## Tools

*   [Top developer tools 2018](https://stackshare.io/posts/top-developer-tools-2018)

## Persian

*   [Awesome Persian by rastikar](https://github.com/rastikerdar/awesome-persian)
*   [Made in Iran](https://github.com/mohebifar/made-in-iran)
*   [Awesome Persian by Faraz](https://github.com/fffaraz/awesome-persian)
*   [Persian APIs](https://github.com/sepandhaghighi/APIs-made-in-Iran)

## Online IDE

*   [CodeSandbox](https://codesandbox.io/)
*   [Theia](https://github.com/theia-ide/theia-apps)
*   [StackBlitz](https://stackblitz.com/)
*   [GitPod](https://www.gitpod.io/)

## Continuous Integration
*   [Jenkins](https://www.jenkins.io/)
*   [Circle CI](http://circleci.com)
*   [Drone.io](https://drone.io/)
*   GitHub Actions
    *   [Awesome actions](https://github.com/sdras/awesome-actions#github-pages)
*   Bitbucket pipelines
    *   [Test your Bitbucket pipeline locally](https://github.com/mserranom/bbrun)
*   Gitlab pipelines
    *   [Predefined variables](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)
    *   [Install Gitlab Runner on Linux](https://docs.gitlab.com/runner/install/linux-repository.html)
*   [Toast](https://github.com/stepchowfun/toast)

## Code review

*   [Fisheye](https://www.atlassian.com/software/fisheye)

## Reproducible Development Environments

*   [Reproducible Development Environments](https://garbas.si/2015/reproducible-development-environments.html)

## Develop Environments

*   [Lando](https://github.com/lando/lando)
*   [Phase2](https://github.com/phase2)
*   [Docksal](https://github.com/docksal/docksal)
*   [Ballast](https://github.com/digitalpulp/ballast)
*   [Docker development tools](https://www.docker.com/products/developer-tools)
*   [Create a reproducible dev environment with VS Code](https://medium.com/swlh/create-a-reproducible-dev-environment-with-vs-code-fd89285644da)
*   [Visual Studio: developing inside a Container](https://code.visualstudio.com/docs/remote/containers)

### [ADE](https://ade-cli.readthedocs.io/en/latest/#)

*   Fixing an error: `sudo apt-get install musl` and `sudo ln -s /lib/ld-musl-x86_64.so.1 /lib/libc.musl-x86_64.so.1`

## Local Development Environments

*   [Nanobox](https://nanobox.io/app-development-environment)
*   [Koding](https://www.koding.com/)
*   [ML Workspace](https://hub.docker.com/r/mltooling/ml-workspace)
*   [MLHUB](https://mlhub.ai/)

## Development Containers

*   [Binder](https://mybinder.readthedocs.io/en/latest/index.html)
*   [Use a Dockerfile for your Binder repository](https://mybinder.readthedocs.io/en/latest/tutorials/dockerfile.html)
*   [repo2docker](https://repo2docker.readthedocs.io/en/latest/)

## Development Platform

*   [Building a Platform for Duct Tape](https://www.zymergen.com/blog/technology/building-a-platform-for-duct-tape/)

## Package Management

*   [Homebrew](https://docs.brew.sh/Homebrew-on-Linux)

</div>
