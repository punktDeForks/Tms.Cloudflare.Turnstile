# Tms.Cloudflare.Turnstile

This package provides a form element for the CAPTCHA alternative [Turnstile by Cloudflare](https://developers.cloudflare.com/turnstile/) and can be used on your Neos CMS site with [Neos.Form](https://github.com/neos/form) & [Neos.Form.Builder](https://github.com/neos/form-builder).


> Turnstile is Cloudflare’s smart CAPTCHA alternative. It can be embedded into any website without sending traffic through Cloudflare and works without showing visitors a CAPTCHA.

Cloudflare Turnstile documentation: https://developers.cloudflare.com/turnstile/

## Install

```bash
composer require tms/cloudflare-turnstile
```

## Usage

1.) [Create a free Cloudflare account](https://dash.cloudflare.com/sign-up) or [log in](https://dash.cloudflare.com/login) to your existing one

2.) Go to **Turnstile**

3.) Select **Add a site** and fill out the form

4.) Copy the `site key` and `secret key` and add the following environment variables

```yaml
# Configuration/Settings.yaml
Tms:
  Cloudflare:
    Turnstile:
      siteKey: '%env:CLOUDFLARE_TURNSTILE_SITE_KEY%'
      secretKey: '%env:CLOUDFLARE_TURNSTILE_SECRET_KEY%'
```

> **Note:** In `Development` context the package automatically sets [test keys that always pass](https://developers.cloudflare.com/turnstile/frequently-asked-questions/#are-there-sitekeys-and-secret-keys-that-can-be-used-for-testing)

5.) Add the Turnstile form element to your form configuration or use the Turnstile content element in your node-based forms

```
prototype(Vendor.PackageName:MyForm) < prototype(Neos.Form.Builder:Form) {
    firstPage.elements {
        turnstile = Tms.Cloudflare.Turnstile:Turnstile.Definition
    }
}
```

## Notes

By default, the Turnstile API is called on form interaction. Set `lazyload: false` to call the API on page load.

```yaml
# Configuration/Settings.yaml
Tms:
  Cloudflare:
    Turnstile:
      lazyload: true
```


## Acknowledgments

Development sponsored by [tms.development - Online Marketing and Neos CMS Agency](https://www.tms-development.de/)
