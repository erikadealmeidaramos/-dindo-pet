# Stage 1: Build with Maven
FROM maven:3.8.4-openjdk-17 AS build
ENV LOG_DIRECTORY=$LOG_DIRECTORY
WORKDIR /app
COPY ./app .
RUN mvn dependency:purge-local-repository
RUN mvn clean package -DskipTests
RUN mvn package spring-boot:repackage

# Stage 2: Create final image with JRE and executable jar
FROM openjdk:17-jdk-alpine3.14
ENV LOG_DIRECTORY=$LOG_DIRECTORY
COPY --from=build /app/target/dindoepet.jar /app/dindoepet.jar
COPY ./app/src/main/resources/logback.xml /app/logback.xml
EXPOSE 8080
CMD ["java", "-Dlogback.configurationFile=/app/logback.xml", "-jar", "/app/dindoepet.jar"]