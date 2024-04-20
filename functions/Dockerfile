# Use an official Deno docker image
FROM denoland/deno:alpine

# Set the working directory
WORKDIR /app

# Copy your Deno application files to the container
COPY . .

# Cache the dependencies if you have any
# RUN deno cache deps.ts

# Expose the port your app runs on
EXPOSE 8000

# Set the user to use non-root user
USER deno

# Run your Deno app
CMD ["run", "--allow-net", "--allow-env", "app.ts"]
