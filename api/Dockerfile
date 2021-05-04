FROM golang:1.16

WORKDIR /go/src/api
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...

EXPOSE 8888

RUN go get github.com/pilu/fresh
CMD ["fresh"]