#!/usr/bin/bash
if [[ `git status --porcelain` ]]; then
  # git config --global user.name 'CI:Butch Landingin'
  # git config --global user.email 'butchtm@users.noreply.github.com'
  git commit -m "chore: add commit-catalog script" 
  git push
  echo "Catalog items updated"
  true
else
  echo "No update of catalog items"
fi
echo "Done!"
