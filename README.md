# Hyprthemer Registry

## Instruction

### For new rice
If you create a new repository for hyprthemer, you can build clean structure for rice.
```
you-clean-theme/
├── theme.toml
├── hypr/
│   └── hyprland.conf
├── kitty/
│   └── kitty.conf
└── eww/
    ├── eww.scss
    └── eww.yuck
```
In `theme.toml`
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
### And deep mapping for old rices
In `theme.toml`
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

### Example for `theme.json` in hyprthemer-registry
```json
{
  "name": "cyber-neon",
  "author": "danil",
  "repo": "https://github.com/user/cyber-neon",
  "description": "Bright neon setup for Hyprland & Eww bars / Яркий неоновый сетап"
}
```
