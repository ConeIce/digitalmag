# digitalmag

## How to run locally

1. Install Go and Hugo from here

- https://go.dev/doc/install
- https://gohugo.io/installation/

2. Clone the repo with this command

```bash
   git clone https://github.com/ConeIce/digitalmag.git

```

3. Install npm dependencies at digitalmag/themes/digit

```bash
  cd digitalmag/themes/digit
  npm install
```

4. Run the tailwind watcher. Keep it running

```bash
   npm run watch
```

5. Open a new terminal window and cd back into digitalmag and run

```bash
   hugo
   hugo serve
```
