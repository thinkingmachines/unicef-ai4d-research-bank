#!/usr/bin/bash
if [[ `git status --porcelain` ]]; then
  git config --global user.name 'CI:Butch Landingin'
  git config --global user.email 'butchtm@users.noreply.github.com'
  git commit -m "ci: Update generated catalog items and detail images" 
  git push
  echo "Catalog items updated"
  true
else
  echo "No update of catalog items"
fi
echo "Done!"
