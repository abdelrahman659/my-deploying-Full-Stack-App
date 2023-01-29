# App Pipeline

## CI(Continuous Integration)

![Alt text](Project%20Pipeline.png)

### GitHub

First of All you need to clone your project then GitHub triggers the CircleCI platform when code is pushed to the repository.

1. PUSH the code on main GitHub Repository then CircleCi will run script automatically.

### CircleCI

CircleCI reads the .circleci/config.yml file which Contain App WorkFlow. In the case of Tis App, there are 2 jobs (Build & Deploy).

1. Set environement variables

```
POSTGRES_USERNAME
POSTGRES_PASSWORD
POSTGRES_HOST
POSTGRES_DB
DB_PORT
PORT
AWS_BUCKET
AWS_REGION
AWS_PROFILE
JWT_SECRET
URL
```

2. Install Node.js version 14 or hightr
3. Install AWS CLI version 1 or 2
4. Configre AWS Access Key
5. Install Front End Dependencies `npm install`
6. Build FrontEnd `npm run build`
7. Deploy FrontEnd to AWS-S3-Bucket
8. Install Backend Dependencies `npm install`
9. Build Backend `npm run build`
10. Install EB CLI
11. Deploy Backend to AWS EB

![Alt text](Udagram%20Architecture.png)
