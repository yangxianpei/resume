if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.txt &&echo "<!DOCTYPE>
  <title>Hello</title>
  <h1>Hi</h1>">index.txt&&mv index.txt index.html  
  cd css&&touch style.txt&&echo "h1{color: red;}">style.txt&&mv style.txt style.css
  cd js&&mkdir main.txt&&echo "var string = "Hello World""> main.txt &&mv main.txt mian.js
  echo 'success'
  exit
fi