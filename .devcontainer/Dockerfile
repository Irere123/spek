ARG VARIANT=1.16
FROM elixir:${VARIANT}

ENV USERNAME=spek
ENV USER_UID=1000
ENV USER_GID=$USER_UID

COPY scripts/*.sh /tmp/scripts/

# Create non-root spek user
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && bash /tmp/scripts/user.sh "$USERNAME" "$USER_UID" "$USER_GID" \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg

# Install Node.js
ENV NVM_DIR=/home/$USERNAME/.nvm
ENV NODE_VERSION="lts/*"

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    # Install common packages, non-root user, update yarn and install nvm
    && bash /tmp/scripts/node.sh "$NVM_DIR" "$NODE_VERSION" "$USERNAME" \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg

# Cleanup scripts
RUN rm -rf /tmp/scripts

CMD ["sleep", "infinity"]