# Kirby hero field

This field is a modified copy of the `image` field. The only difference is that you will have a large image preview.

![](https://raw.githubusercontent.com/jenstornell/kirby-hero-field/master/hero.png)

## What is a hero?

A hero image is a large image that is often placed as a big header image on the site.

## When to use the hero field

- Use the hero field if you want a large full scale preview.
- Use the hero field for horizontal images.
- Don't use the hero field for vertical images.

## Installation

1. Put the folder `hero` inside `site/fields/`.
2. Add it to your blueprint.

## Blueprint

```yaml
fields:
  my_hero:
    label: Hero image
    type: hero
```

## Compability

If you have an `image` field and want to switch to the `hero` field it's possible. They are compatible so you can switch between them.

## Version

This field is tested with Kirby 2.3 development branch.