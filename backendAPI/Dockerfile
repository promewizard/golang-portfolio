# FROM golang:1.22.1 as build-stage
# WORKDIR /usr/src/app

# COPY go.mod go.sum ./
# RUN go mod download

# COPY . ./
# RUN CGO_ENABLED=0 GOOS=linux go build -o /api

# FROM gcr.io/distroless/base-debian11 AS release-stage

# WORKDIR /

# COPY --from=build-stage /api /api

# USER nonroot:nonroot

# ENTRYPOINT ["/api"]
# Use the official Golang image to create a build artifact.
FROM golang:1.18-alpine AS builder

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Start a new stage from scratch
FROM alpine:latest  

WORKDIR /root/

# Copy the Pre-built binary file from the previous stage
COPY --from=builder /app/main .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the executable
CMD ["./main"]