FROM golang:1.22.1
WORKDIR /usr/src/app

COPY . .
RUN go mod tidy

CMD ["go", "run", "main.go"]