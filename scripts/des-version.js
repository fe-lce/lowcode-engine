const path = require('path');
const fs = require('fs');
const process = require('child_process');

// 需要修改版本的依赖
// 如果不想更新某依赖，注释掉即可
const pkgs = [
  // ['xxx', '^0.0.1'], 比方说不想更新这个
  // ['vite', '^6.0.1'],
  // ['vite-plugin-dts', '^4.3.0'],
  // ['vitest', '^2.1.6'],
  ['react', '^18.3.1'],
  ['react-dom', '^18.3.1'],
  ['@types/react', '^18.3.1'],
  ['@types/react-dom', '^18.3.1'],
];

// 获取最新版本
// 忽略eslint的警告
// eslint-disable-next-line
function getPkgNewVersion() {
  console.log('开始获取依赖最新正式版本……');
  pkgs.forEach((pkg) => {
    const [name] = pkg;
    const versionStr = process.execSync(`npm view ${name} versions --json`);
    const versions = JSON.parse(versionStr.toString());
    const officialVersions = versions.filter((item) => !/[a-zA-Z]+/.test(item));
    const newVersion = officialVersions[officialVersions.length - 1];
    pkg[1] = `^${newVersion}`;
    console.log(`| ${name}: ${newVersion}`);
  });
  console.log('最新版本已获取完毕');
}

// 忽略的文件夹
const ignoreDirs = ['node_modules', 'dist', 'public', 'lib', 'es', '.vscode'];

// 递归查询函数
function recursiveSearch(folderPath, callback) {
  // 读取文件夹下的文件
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // 遍历文件列表
    for (const file of files) {
      // 拼接文件路径
      const filePath = path.join(folderPath, file);

      // 如果是文件夹，则递归调用recursiveSearch函数
      const stats = fs.statSync(filePath);
      if (stats.isDirectory() && !ignoreDirs.includes(file)) {
        recursiveSearch(filePath, callback);
      } else {
        // 如果是文件，则调用回调函数callback
        callback({
          file,
          filePath,
        });
      }
    }
  });
}

// getPkgNewVersion();
recursiveSearch(path.join(__dirname, '../'), (info) => {
  const { file, filePath } = info;
  if (file !== 'package.json') return;

  const relativePath = path.relative(path.join(__dirname, '..'), filePath);

  console.log('');
  console.log(`${relativePath} 开始解析`);
  const fileInfo = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(fileInfo);

  const hasUpgrade = pkgs
    .map((pkg) => {
      const [name, version] = pkg;
      let needUpgrade = false;
      if (jsonData.devDependencies?.[name] && jsonData.devDependencies[name] !== version) {
        jsonData.devDependencies[name] = version;
        needUpgrade = true;
      }
      if (jsonData.dependencies?.[name] && jsonData.dependencies[name] !== version) {
        jsonData.dependencies[name] = version;
        needUpgrade = true;
      }
      if (jsonData.pnpm?.overrides?.[name] && jsonData.pnpm.overrides[name] !== version) {
        jsonData.pnpm.overrides[name] = version;
        needUpgrade = true;
      }
      if (needUpgrade) {
        console.log(`| ${name} 替换 ${version} 版本`);
      }
      return needUpgrade;
    })
    .some((bool) => bool);
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2) + '\n', 'utf8');
  console.log(`${relativePath} ${hasUpgrade ? '更新完毕' : '无需更新'}`);
});
