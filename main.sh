#!/bin/bash

# Get display resolution using xrandr and extract width and height
display_info=$(xrandr | awk '/\*/ {print $1}')
display_width=$(echo "$display_info" | cut -d 'x' -f 1)
display_height=$(echo "$display_info" | cut -d 'x' -f 2)

echo "Display Width: $display_width"
echo "Display Height: $display_height"

node index.js $display_width $display_height

colorScheme=$(gsettings get org.gnome.desktop.interface color-scheme)
#echo "$colorScheme"

#fileURL="file:///usr/share/backgrounds/warty-final-ubuntu.png"
script_dir=$(pwd)
relative_path="Default.png"

fileURL="file://$script_dir/$relative_path"

if [ "$colorScheme" == "'prefer-dark'" ]; then
  echo "DARK"
  gsettings set org.gnome.desktop.background picture-uri-dark $fileURL
  echo "$(gsettings get org.gnome.desktop.background picture-uri-dark)"
else
  echo "LIGHT"
  gsettings set org.gnome.desktop.background picture-uri $fileURL
  echo "$(gsettings get org.gnome.desktop.background picture-uri)"
fi