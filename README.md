![image](static/jobie.gif)

## Steps to run this project on your local system

<h3>Step 1:Fork</h3>
<p>Fork the project on Github and clone your fork locally to your system.</p>
<p><b>Using SSH:</b></p>
    
```bash
git clone git@github.com:<your_username>/jobie-telegram-scrapper.git
```
<i>OR</i>
<p><b>Using HTTPS:</b></p>

```bash
git clone https://github.com/<your_username>/jobie-telegram-scrapper.git
```

<p>Then navigate to JobIE</p>

```bash
cd jobie-telegram-scrapper
```

<h3>Step 2:Branch</h3>
To keep your development environment organized, create local branches to hold your work. These should be branched directly off of the main branch.

```bash
git checkout -b my-branch -t upstream/main
git remote add upstream https://github.com/akshatnema/jobie-telegram-scrapper.git
git fetch upstream
```

<h3>Step 3:Build</h3>
<p>Now we are ready to build the project , but first of all make sure that you have <b>NodeJS</b> installed in your system.<p>
    
 <p>Inside the folder, run the following commands to install all the dependencies.<p>
     
```bash
npm install
``` 
<h3>Step 5:Start Developing</h3>
<p>Run the following command to start this project in system</p>

```bash
npm run dev
```

Your site will be hosted locally at: <b>http://localhost:8000/</b>

<h3>Step 6:Commit</h3>
<p>It is recommended to keep your changes grouped logically within individual commits. Commits are a great way to help your fellow contributors keep check of the changes you made to the project.</p>

```bash
git add my/changed/file
git commit -m "changes-made"
```

<h2>Push</h2>
<p>Once your commits are ready to go begin the process of opening a pull request by pushing your working branch to your fork on GitHub.</p>

```bash
git push origin my-branch
```

🎉 Enjoy!! Your work is done. Go and upload your amazing PR now..:+1:
