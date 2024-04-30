## Returning multiple elements in JSX

- JSX is stricter than HTML. You have to close tags like `<br />`. 
- Your component also can’t return multiple JSX elements. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper

## Styling in JSX

- JSX uses `className` instead of `class`
- To inject CSS into JSX you have to write it like this `style = {{"property": "value"}}` since JS requires Object of styles.
- `style={{}}` is not a special syntax, but a regular js `object` inside the `style={ }` JSX curly braces.

## Planning and Building Application

In order to build any application or webapp, first we should plan out things, We need a `wireframe` which guides about the design approach of the application. This ensures we build only things that are required.

Each part of application can be built as a `component` separately.

*For example:*

<details>
<summary><strong>Header</strong></summary>

- Logo
- Nav items
</details>

<details>
<summary><strong>Main</strong></summary>

- Search
- Cards Container
  - Cards
</details>

<details>
<summary><strong>Footer</strong></summary>

- Copyright section
- Links
- Address Info
- Contact Info
</details>

## Component Reusability

Each component should be built once and not again and again, meaning DRY principle, this means only one component and then we can reuse those components.