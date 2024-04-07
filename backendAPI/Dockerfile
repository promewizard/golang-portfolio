FROM golang:1.22.1 as build-stage
WORKDIR /usr/src/app

COPY go.mod go.sum ./
RUN go mod download

COPY . ./
RUN CGO_ENABLED=0 GOOS=linux go build -o /api

FROM gcr.io/distroless/base-debian11 AS release-stage

WORKDIR /

COPY --from=build-stage /api /api

USER nonroot:nonroot

ENTRYPOINT ["/api"]