FROM maven:3.1.0-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests


FROM openjdk:17.0.1-jdk-slim
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar assignment1.jar
EXPOSE 8080 
ENTRYPOINT [ "java","-jar","assignment1.jar"]
