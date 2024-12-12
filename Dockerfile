# Step 1: Use Node.js 16 as the base image
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
# This will allow Docker to cache the npm install step
COPY package.json package-lock.json* ./

# Step 4: Install the app dependencies
RUN npm install --frozen-lockfile

# Step 5: Copy the rest of your application code to the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Create the final production image using a smaller image
FROM node:16-slim

# Step 8: Set the working directory for the final image
WORKDIR /app

# Step 9: Copy the dependencies from the build stage
COPY --from=build /app/node_modules ./node_modules

# Step 10: Copy the build output and the necessary files
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Step 11: Expose the port your Next.js app will run on (default is 3000)
EXPOSE 8000

# Step 12: Command to start the Next.js app in production mode
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "8000"]
