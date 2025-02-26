# Deploying to Render

This guide explains how to deploy the Reserhub Commerce API to Render.

## Prerequisites

1. A [Render account](https://render.com/)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Manual Deployment

1. Log in to your Render dashboard
2. Click "New" and select "Web Service"
3. Connect your Git repository
4. Configure the service:
   - Name: `reserhub-commerce-api` (or your preferred name)
   - Environment: `Docker`
   - Branch: `main` (or your preferred branch)
   - Root Directory: `apps/commerce-api`
   - Leave other settings at their defaults
5. Click "Create Web Service"

### Option 2: Using Render Blueprint

1. Make sure the `render.yaml` file is in your repository
2. Push your changes to your Git repository
3. Log in to your Render dashboard
4. Click "New" and select "Blueprint"
5. Connect your Git repository
6. Click "Apply Blueprint"

## Environment Variables

If your app requires secret environment variables, you can set them in the Render dashboard:

1. Navigate to your service dashboard
2. Click on "Environment"
3. Add the required environment variables

## Monitoring and Troubleshooting

- Visit the "Logs" tab in your service dashboard to view application logs
- Check the "Events" tab to see deployment status and events

## Additional Resources

- [Render Docker Deployment Documentation](https://render.com/docs/docker)
- [Render Blueprint Documentation](https://render.com/docs/blueprint-spec)
