#!/bin/bash

# Get display resolution using xrandr and extract width and height
display_info=$(xrandr | awk '/\*/ {print $1}')
display_width=$(echo "$display_info" | cut -d 'x' -f 1)
display_height=$(echo "$display_info" | cut -d 'x' -f 2)

# echo "Display Width: $display_width"
# echo "Display Height: $display_height"

colorScheme=$(gsettings get org.gnome.desktop.interface color-scheme)


#echo "$colorScheme"

#fileURL="file:///usr/share/backgrounds/warty-final-ubuntu.png"
script_dir=$(dirname "$(readlink -f "$0")")
relative_path="Default.png"

fileURL="file://$script_dir/$relative_path"
echo $script_dir/index.js
if [ "$colorScheme" == "'prefer-dark'" ]; then
  node $script_dir/index.js $script_dir $display_width $display_height 1
  # echo "DARK"
  gsettings set org.gnome.desktop.background picture-uri-dark $fileURL
  echo "$(gsettings get org.gnome.desktop.background picture-uri-dark)"
else
  node $script_dir/index.js $script_dir $display_width $display_height 0
  # echo "LIGHT"
  gsettings set org.gnome.desktop.background picture-uri $fileURL
  # echo "$(gsettings get org.gnome.desktop.background picture-uri)"
fi

sleep 15m
$script_dir/main.sh