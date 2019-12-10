# Keep Talking and Everybody Codes

A repository for showing how you write and think about code.
Used as a starting point for a good discussion about our job.

## Context

You probably came here because you have a second interview with us. In the second interview, we'd like to dive more into technology. We want to see how you write code, how you think and what you think is important when writing code. To do this we'd like to kickstart our discussion about this.

There are many ways to do this. Maybe you have open source projects that you'd like to share. Maybe you'd like to show some code from a previous project. Those would be fine, but maybe you don't have something like that (yet). Therefore, we have this repository: an exercise that can use as a starting point to write some code that we can use as a subject for our discussion.

You might wonder "Is this a _test_"?
The answer is very clear to us: **no**!
_It is something like a test_, but there are some important differences:


- It doesn't decide whether you get invited back (okay, unless you do something _really_ stupid). We already decided that you could come back when we sent you here. So you'll always get the chance to explain your choices.
- We want you to **timebox this to 2 to 4 hours**. It makes sense that you don't get to finish all in that time. Focus on showing what you think is important, and explain those choices to us.
- You can fail a 'test', but not this exercise, it's purely used as _input_ for our next talk.

## The exerise

The exercise consists of 3 parts in which you use the dataset you can find at [data/cameras-defb.csv](data/cameras-defb.csv).
You can chose a language and tech stack of your own choice (we are most familiar with C#, JavaScript, PHP, Java). 

## CLI

Make a program or script that allows the use to search through a CLI a part of the camera _name_, for example:

```sh
# call PHP via CLI 
php search.php --name Neude

# Or if you used .NET Core
dotnet Search --name Neude

# Etc.
```

Expected output:

```none
501 | UTR-CM-501 Neude rijbaan voor Postkantoor | 52.093421 | 5.118278
503 | UTR-CM-503 Neude plein | 52.093448 | 5.118536
504 | UTR-CM-504 Neude / Schoutenstraat | 52.092995 | 5.119088
505 | UTR-CM-505 Neude / Drakenburgstraat / Vinkenurgstraat | 52.092843 | 5.118351
506 | UTR-CM-506 Vinkenburgstraat / Neude | 52.092378 | 5.117902
507 | UTR-CM-507 Vinkenburgstraat richting Neude | 52.092234 | 5.117766
```

## API

Serve the data through a Web-API, such that a web application can fetch the data.

## Web application

The first part consists of retrieving the data from the API from the previous step.
Render the data spread over the four columns given in [code/index.html](code/index.html).
The spreading of the data needs to follow the following rules based on the `number` of the camera:

1. If `number` is divisible by 3, then it should go in the first column.
2. If `number` is divisible by 5, then it should go in the second column.
3. If `number` is divisible by 3 and divisible by 5, then it should go in the third column.
4. If `number` is not divisible by 3 and is not  divisible by 5, then it should go in the last column.

The second part consists of showing the camera locations as markers in Google Maps.
Show _all_ cameras in the `div` with id _map_ in the given [code/index.html](code/index.html).
You can find documentation for how to use Google Maps at [the Google Maps documentation](https://developers.google.com/maps/documentation/javascript/examples/marker-simple).

## Wut? Open Source?!

Yes, this exercise is open source!

"_Aren't you afraid people will 'cheat'?_"
Well, the probability for that wouldn't be much higher that when we would _e-mail_ you an exercise.
We value being open en honest to eachother, and trust that you'll do this exercise by yourself. 
Besides that, things will show when we actually discuss what you made...

"_Do you accept.... pull requests?_"
Of couse!
But it isn't the primary goal, so rather focus on the exercise itself.
Should you have - after the exercise - some suggestions for how to improve, or would you like to correct a typo: keep them PR's coming!
Or open an issue if you have questions.

## About the title

Huh?

> Keep Talking and Everybody Codes

"_What's that?_"
Sorry, it's a pun related to [a cool game](http://www.keeptalkinggame.com/).

## License and Copyright

See [LICENSE.txt](LICENSE.txt) for complete details.
In short, you may maintain a fork e.g. with a translation at your leasure, as long as you honor the terms of the licenses.
For merely changing (translating) the README this simply means you should (a) attribute the work to [the original repository from Infi](https://github.com/infi-nl/everybody-codes) and (b) publish your modified version under the same terms to be used by others.
_Sharing is caring!_ 🧡😊
