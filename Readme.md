<div align="center">
  <a href="http://memcode.com" title="Website memcodec.com">
    <img src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg"/>
  </a>
  
  <a href="https://GitHub.com/Naereen/lakesare/memcode/contributors/" title="GitHub contributors">
    <img src="https://img.shields.io/github/contributors/lakesare/memcode"/>
  </a>
  
  <a href="https://github.com/lakesare/memcode/blob/master/LICENSE" title="GitHub license">
    <img src="https://img.shields.io/github/license/Naereen/StrapDown.js.svg"/>
  </a>
  
  <a href="https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request" title="PRs welcome">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/>
  </a>

<!--   <a href="https://gitpod.io/#https://github.com/lakesare/memcode" title="Gitpod Ready-to-Code">
    <img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod"/>
  </a> -->

  <a href="https://patreon.com/memcode" title="Donate to Memcode project using Patreon">
    <img src="https://img.shields.io/badge/patreon-donate-yellow.svg"/>
  </a>
</div>

<h1 align="center">
  Memcode
</h1>

<h2 align="center">
  Flashcards for coders and scientists. Open-source, free for all.
</h2>

<div align="center">
  <img width="950px" alt="Memcode Screenshot" src="https://user-images.githubusercontent.com/7578559/154212696-1597a568-7a97-44d8-bda9-56cc80fcc725.png">
</div>

## Links

**Website**: <a href="https://www.memcode.com">memcode.com</a>  
**Patreon**: <a href="https://patreon.com/memcode">patreon.com/memcode</a>   
**Email**:   contact@memcode.com    
**Twitter**: <a href="https://twitter.com/memcodeapp">twitter.com/memcodeapp</a>  
**Alternative.to**: <a href="https://alternativeto.net/software/memcode/about">alternativeto.net/software/memcode/about</a>    

## Requesting a feature

Over the years since Memcode's inception, we've received a ton of feature requests. Your suggestions have helped shape Memcode into the beautiful tool for thought it is today. However, every feature has associated development costs in terms of time and resources. This often leads to a backlog of issues and potential for features to go stale.

To address this and ensure that your desired features are implemented, I'm introducing a new approach to feature development. This will allow you to have a direct hand in the betterment of Memcode.

The process:

- **Feature Requests**: If you have an idea for a feature, <a href="https://github.com/lakesare/memcode/issues/new">create an issue</a> on the github issues page.  
- **Estimation**: I'll look over your request, figure out how much work it will take, and put a price on it.  
- **Payment**: If you're okay with the price, you can pay to have it implemented in the next few weeks.  

Remember, don't hesitate to propose feature ideas even if you're not in a position to cover the cost. Knowing your needs and desires for Memcode is invaluable, and it's quite possible someone else might resonate with your idea and be able to fund its implementation.

## Contributing

First of all - you are very welcome to contribute, Memcode is a joint effort.   
Feel free to ask questions/propose features in github issues, or join our developer Slack (please write to contact@memcode.com to request access).

<!-- Note: if you'd like to use online development environment, try <a href="https://github.com/lakesare/memcode/blob/master/Gitpod.md">Gitpod.md</a> (might need some adjustments). The steps below are for the local setup. -->

#### Create a database postgres user with a password.
1. Install PostgreSQL.
2. Go to postgres console: `psql postgres`.
3. Create a `postgres` user with password: `CREATE ROLE postgres WITH LOGIN PASSWORD 'postgres';`.
4. Give the user a permission to create dbs, own all extensions, etc.: `ALTER ROLE postgres with superuser;`.

#### Copypaste environment variables.
1. **Either** copy the example environment file with `cp env.example.js env.js`, and insert the required values yourself,
2. **Or** write to **contact@memcode.com** and I will send you a ready `env.js` file.
In either case, you will need to insert your own `DB_USER` and `DB_PASSWORD` that you created in the previous step.

#### Install the needed libraries.
1. Install npm.
2. Run `npm install`

#### Set up the database.
1. Create a new development database 'memcode': `make db-reset`.
This will create the raw database for you - schema, a few necessary database rows, and nothing else.
If you would like a bigger database to have something to work with, please write to contact@memcode.com, and I will create a development dump for you.

#### Start code compilers and server.
1. Run `make all` in your terminal.
This will start:
- `make backend-webpack` (compiles the backend code on every change)
- `make frontend-webpack` (compiles the frontend code on every change)
- `make start` (starts the node server)
for you.  
You can also run these separately if you wish to see the individual output.
2. Go to <a href="http://localhost:3000/">http://localhost:3000</a>, and enjoy the development!


<br/>
<div align="center">
  <img width="50px" src="https://user-images.githubusercontent.com/7578559/154219522-280c4f96-4e3d-45e9-9beb-671b339b3f92.png" alt="Memcode Logo"/>
</div>
