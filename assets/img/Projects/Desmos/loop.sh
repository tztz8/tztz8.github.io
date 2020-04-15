#!/bin/bash
#FILES=/path/to/*
for f in *.png
do
  echo "Processing $f file..."
  # take action on each file. $f store current file name
  mv "$f" "$f-2"
done
