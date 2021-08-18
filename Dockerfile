FROM openjdk:11
ADD target/employees.jar employees.jar
EXPOSE 8080
ENTRYPOINT ["java","-Dspring.profiles.active=docker", "-jar", "employees.jar"]
