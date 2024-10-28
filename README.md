# Host Filter List to UBlock Origin Filter List
A (relatively) useful html website for converting host filters to uBlock Origin custom filters

View github web deployment [HERE](https://hydroflame522.github.io/host-to-ublock-filter/)


## Example
input:
```
0.0.0.0 a.admob.com
127.0.0.1 ads.spotify.com
0.0.0.0 analytics.spotify.com
0.0.0.0 0.fls.doubleclick.net
```

output:
```
||a.admob.com^
||ads.spotify.com^
||analytics.spotify.com^
||0.fls.doubleclick.net^
```

## About
I made this so I could convert a stupid spotify ad filter list [here](https://raw.githubusercontent.com/x0uid/SpotifyAdBlock/master/hosts) that you can use to test the tool if you want

this is very barebones and I didn't spend much time making style look good or anything, it's just supposed to be single use and functional so I guess it works...

I was pretty bored and I got pissed off at spotify so I release dis with a ui thing instead of making it just parse text file which isnt user friendly...

hydroflam on top. spotify on botom. ez.
