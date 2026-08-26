# Create an empty project directory and run:
mvn archetype:generate \
-DarchetypeGroupId=io.vanillabp.blueprint \
-DarchetypeArtifactId=workflowmodule-springboot-standalone-archetype \
-DgroupId={your.groupId} \
-DartifactId={your.artifactId} \
-Dversion={your.version}

# Build the application:
mvn clean package -Pcamunda7

# Start the application:
java -jar target/loan-approval.jar --spring.profiles.active=camunda7
