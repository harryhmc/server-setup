# syntax=docker/dockerfile:1

FROM centos:centos8

# CentOS is EOL and we need to switch the repo list
# https://stackoverflow.com/questions/70930615/no-urls-in-mirrorlist-with-yum-on-centos-due-to-appstream
RUN sed -i -e "s|mirrorlist=|#mirrorlist=|g" -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-Linux-* &&\
dnf install centos-release-stream -y &&\
dnf swap centos-{linux,stream}-repos -y &&\
dnf distro-sync -y

# Installing nginx and copying over config
RUN yum install -y epel-release
RUN yum install -y nginx
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
EXPOSE 8080