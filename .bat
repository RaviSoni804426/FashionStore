@echo off
for %%x in (
adpyke.codesnap
bradlc.vscode-tailwindcss
christian-kohler.npm-intellisense
davidanson.vscode-markdownlint
donjayamanne.githistory
donjayamanne.python-environment-manager
donjayamanne.python-extension-pack
dsznajder.es7-react-js-snippets
eamodio.gitlens
esbenp.prettier-vscode
formulahendry.code-runner
formulahendry.vscode-mysql
franneck94.vscode-coding-tools-extension-pack
github.vscode-github-actions
github.vscode-pull-request-github
grapecity.gc-excelviewer
ibm.output-colorizer
james-yu.latex-workshop
jasonnutter.search-node-modules
leetcode.vscode-leetcode
mechatroner.rainbow-csv
ms-azuretools.vscode-containers
ms-edgedevtools.vscode-edge-devtools
ms-kubernetes-tools.vscode-kubernetes-tools
ms-mssql.data-workspace-vscode
ms-mssql.mssql
ms-python.debugpy
ms-python.isort
ms-python.python
ms-python.vscode-pylance
ms-python.vscode-python-envs
ms-toolsai.datawrangler
ms-toolsai.jupyter
ms-toolsai.jupyter-keymap
ms-toolsai.jupyter-renderers
ms-toolsai.vscode-jupyter-cell-tags
ms-toolsai.vscode-jupyter-slideshow
ms-vscode-remote.remote-containers
ms-vscode-remote.remote-ssh
ms-vscode-remote.remote-wsl
ms-vscode-remote.vscode-remote-extensionpack
ms-vsliveshare.vsliveshare
mtxr.sqltools
njpwerner.autodocstring
packs.basic
pkief.material-icon-theme
pkl2csv.pkl2csv
redhat.vscode-yaml
ritwickdey.liveserver
sugatoray.jinja-extension-pack
tyriar.sort-lines
viktorzetterstrom.non-breaking-space-highlighter
vinirossa.vscode-gitandgithub-pack
vscode-icons-team.vscode-icons
wholroyd.jinja
xabikos.reactsnippets
xaviercai.vscode-leetcode-cpp-debug
yessky.devpack-bootstrap
yessky.web-extpack
yzhang.markdown-all-in-one
ziyasal.vscode-open-in-github
) do (
    echo Installing %%x ...
    code --install-extension %%x
    timeout /t 2 >nul
)
echo ✅ All extensions installed!
pause
