Provisioning a new site
=======================

This is based on the chapter https://www.obeythetestinggoat.com/book/chapter_making_deployment_production_ready.html

However, we have used a different process on Namecheap.

## Setup Python App
Create a new python app, select the correct python version, and give it a subdomain.

ssh in, clone the repo, then pull it down a level into the created directory.
pip install, migrate the database.

Create a file in `/etc/secrets.json` with the keys - since we don't really have env variables.
```
{
    "FILENAME": "secrets.json",
    "DJANGO_DEBUG_FALSE": true,
    "DEBUG": true,
    "SECRET_KEY": "key-here",
    "SITENAME": "host.url"
}
```

To serve static assets, put them anywhere in the subdomain folder (.shirk.dev), and reference them at the top level. I put them in `superlists-staging.shirk.dev/public/`, and then reference them at `/public/`
