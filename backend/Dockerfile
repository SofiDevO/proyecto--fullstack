ARG BUILD_IMAGE=gradle:7.4.2-jdk11
ARG RUNTIME_IMAGE=openjdk:11-jdk-slim
ARG PROFILE=dev

FROM ${BUILD_IMAGE} AS dependencies
ENV APP_HOME=/
WORKDIR $APP_HOME
COPY /src/ /src/
COPY build.gradle build.gradle
COPY settings.gradle settings.gradle
RUN gradle build

FROM ${RUNTIME_IMAGE}
ENV ARTIFACT_NAME=*.jar
ENV PROFILE=${PROFILE}
RUN ln -sf  /usr/share/zoneinfo/America/Bogota /etc/localtime
EXPOSE 8085
COPY --from=dependencies /build/libs/$ARTIFACT_NAME /app/test.jar
CMD ["java", "-Dspring.profiles.active=${PROFILE}", "-jar", "/app/test.jar"]