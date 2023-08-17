---
title: langchain-ChatGLM 部署教程
description: langchain-ChatGLM Linux部署教程 pip版
keywords:
- 开源
tags: 
- 开源
authors:
- Lay Cheng
date: 2023-06-15
---
参考连接：
https://github.com/imClumsyPanda/langchain-ChatGLM#%E5%BC%80%E5%8F%91%E9%83%A8%E7%BD%B2

https://github.com/imClumsyPanda/langchain-ChatGLM/blob/master/docs/INSTALL.md


## 1. 准备linux系统
这里参数如下（具体系统要求，符合官方要求就行）
	系统版本：Ubuntu 18.04 64位
	GPU型号：V100 32GB
	
	
## 3. 创建环境

### 1.  Install [Anaconda](https://pytorch.org/get-started/locally/#anaconda) or [Pip](https://pytorch.org/get-started/locally/#pip). Here we install miniconda 
```shell
# 下载conda安装包
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
# 授权权限
chmod +x Miniconda3-latest-Linux-x86_64.sh
# 从安装包安装conda，一路enter和yes，直到安装成功
./Miniconda3-latest-Linux-x86_64.sh
```
> 参考
> https://docs.conda.io/en/latest/miniconda.html
> https://varhowto.com/install-miniconda-ubuntu-18-04/


### 2. 安装显卡驱动
```shell
# 更新 apt-get
sudo apt-get update
# 安装显卡驱动，一路 y+enter
sudo apt-get install nvidia-driver-460

# 必须执行：重启电脑，使显卡驱动生效 reboot your computer after installation!!!，手动重启或者sudo reboot命令

# 重启后查看显卡驱动面板，是否能显示显卡信息
nvidia-smi
```
> 参考
> https://medium.com/analytics-vidhya/install-cuda-11-2-cudnn-8-1-0-and-python-3-9-on-rtx3090-for-deep-learning-fcf96c95f7a1


### 3. 创建conda环境
由于项目中的某些第三方包不支持最新的python3.11，这里就安装python3.8
```shell
# 创建conda环境
conda create -n langchain python=3.8
# 进入conda环境
conda activate langchain
# 关闭conda环境，不使用conda环境时再用
# conda deactivate
```



## 3. Clone仓库，安装依赖，运行程序


### 1. clone仓库
```shell
# 拉取仓库
git clone https://github.com/imClumsyPanda/langchain-ChatGLM.git
```

### 2. 安装依赖
```shell
# 进入目录
cd langchain-ChatGLM

# 找到当前运行的python
which python # /home/ubuntu/miniconda3/bin/python


# 指定python的pip 安装依赖，使用中科大镜像源加速下载
/home/ubuntu/miniconda3/bin/python -m pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple/

```

### 3. 运行程序

```shell
# 使用上面的指定python运行webui.py，加载完，打开webui的链接就可以使用了
# 这一步会下载模型参数，如果网络不好可以参照官方ChatGLM手动下载参数的方法
/home/ubuntu/miniconda3/bin/python webui.py

```


### 4. webui 效果

http://localhost:7860/

![image.png](https://leicheng42img-1252305483.cos.ap-shanghai.myqcloud.com/pictures/20230608144750.png)





## 4. 如有问题，可以私聊联系

![image.png|200](https://leicheng42img-1252305483.cos.ap-shanghai.myqcloud.com/pictures/20230608144458.png)


