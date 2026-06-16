# 🗂️ Hyprthemer Central Registry

Welcome to the official theme registry for **hyprthemer**. This repository acts as a centralized database where developers and ricers can submit their custom Hyprland setups.

---

## 🚀 How to Submit Your Theme

To list your theme in the official registry, follow these simple steps:

1. **Fork** this repository.
2. Create a new JSON file inside the `themes/` directory named after your theme (e.g., `themes/cyber-neon.json`).
3. Fill it using the following format:

```json
{
  "name": "cyber-neon",
  "author": "danil",
  "repo": "https://github.com/user/cyber-neon",
  "description": "Bright neon setup for Hyprland & Eww bars"
}
```
## 🛠️ Preparing Your Theme Repository
For `hyprthemer` to correctly install your configuration, your theme repository must contain a `theme.toml` file in its root directory.

### 1: Clean Structure(Recomended for new themes)
If you are building a repository from scratch specifically for `hyprthemer`, we recommend keeping it clean and predictable:
```
your-clean-theme/
├── theme.toml
├── hypr/
│   └── hyprland.conf
├── kitty/
│   └── kitty.conf
└── eww/
    ├── eww.scss
    └── eww.yuck
```
In your `theme.toml`:
```toml
name = "muted-comfort"
author = "Lumanis45"
description = "Bright neon setup for Hyprland & Eww bars"
version = "1.0.0"

dependencies = ["hyprland", "eww-wayland", "kitty"]

[mapping]
"hypr" = "~/.config/hypr"
"kitty" = "~/.config/kitty"
"eww" = "~/.config/eww"

[hooks]
post_install = "hyprctl reload && eww reload"
```
### 2: Deep Mapping(For Existing/Complex Rices)
If you want to adopt an older, massive dotfiles repository without changing its directory structure, you can map deep subdirectories directly to their system targets:
```toml
name = "legacy-flex"
author = "old-user"
description = "Resurrected 2023 Hyprland setup via deep mapping"
version = "2.0.0"

dependencies = ["hyprland", "eww-wayland"]

[mapping]
"home-configs/.config/hyprland-v2-flex" = "~/.config/hypr"
"home-configs/.config/eww-custom-widgets" = "~/.config/eww"

[hooks]
post_install = "hyprctl reload"
```
### ⚙️ Configuration Specs
* `dependencies`: A list of required tools.
* `[mapping]`: `"source_folder_in_repo" = "target_path_in_system"`. Supports `~` for the home directory.
* `[hooks]`: 
  * `post_install`: A bash command executed immediately after files are successfully symlinked or copied. Perfect for reloading window managers (`hyprctl reload`) or status bars (`eww reload`).
