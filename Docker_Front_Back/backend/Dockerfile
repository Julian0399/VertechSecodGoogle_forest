FROM python:3.12.0-alpine3.18

ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip
WORKDIR /code
COPY ./requirements.txt /code/
RUN pip install -r requirements.txt 
VOLUME /code/datos
COPY . /code/