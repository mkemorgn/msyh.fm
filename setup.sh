#!/usr/bin/env zsh

# set up dev workspace opens two alacritty windows and starts projects.

alacritty --title "backend" --command zsh -c 'cd backend && source venv/bin/activate && cd msyhfm && python manage.py runserver' &

sleep 1

i3-msg '[title="backend"]' move container to workspace 9

alacritty --title "frontend" --command zsh -c 'cd frontend && npm run dev' &

sleep 1

i3-msg '[title="frontend"]' move container to workspace 9
