var store = [{
        "title": "TeamRedMiner&#58; Setup - Readme [Full Documentation]",
        "excerpt":"we are actively working on bringing many new features in the future releases.    ","categories": ["documentation"],
        "tags": ["PhoenixMiner"],
        "url": "https://teamredminer.info/documentation/setup/",
        "teaser": "https://teamredminer.info/assets/images/thumbs/500x300.png"
      },{
        "title": "Download TeamRedMiner  0.8.3 - AMD+NVIDIA GPU Miner [2021]",
        "excerpt":"  Getting Started With Ethereum Mining  \t\t \t\t\t \t\tVersion: 5.6d  \t\tFile: *PhoenixMiner.exe,    \t\tSHA256: e8e775add50c67e1c6f6ca20db318f745e22b085afcbdf5634015e6ef91e8853  \t\t(Download for Linux)\t \t\t \t\t \t\t \t\t \t\tDownload Now (Windows x64) \t\t \t\t(mirror) \t\t \t     The new PhoenixMiner stale version is ready.   You can download PhoenixMiner 5.6d from here:   Download Now   Download (mirror)   The file contains the link to download the .zip archive and the password (phoenix) to unlock it.   Inside the archive you will find a file README.txt with installation instructions.   Make sure to replace the pool and wallet address by what you’re using in all files.   Changelog   The new features in this release (since 5.6d) are:   The problem with the missing GPU temperatures on Nvidia GPUs is fixed and we released new version with the fix: PhoenixMiner 5.6d. You can find the download links and checksums in this post.   If you are already running 5.6c and your rigs are not showing GPU temperatures, the easiest fix is to add the command-line option -hstats 2   Of course, you can also upgrade to PhoenixMiner 5.6d but the only difference between 5.6c and 5.6d is the fixed problem with GPU temperatures not shown with some Nvidia cards.   Sorry about this regression, we happen to run all of our test rigs with -hstats 2 and that’s why we didn’t detect the problem sooner.   The changes of the previous beta (5.6d) since the last version (5.5c) are:      Added native kernels for AMD RX6700 GPUs. These are faster than the generic kernels and produce a lot less stale shares   Increase the max supported DAG epoch to 550 (should be enough to about Jan 2023)   Full support for setting clocks, fan speeds, voltages, and memory timings of AMD RX6900/6800/6700 cards   The specific hashrate is now shown in the form of kilo hashes per joule (kH/J). Example: if a GPU has hashrate of 30 MH/s with 100W power usage, the specific hashrate is 300 kH/J   Added new command-line parameters -ttj and -ttmem, allowing automatic fan speed control based on GPU hotspot (junction), and memory temperatures respectively. Example: -ttmem 83 will keep the GPU memory temperature at or bellow 83C by increasing the fan speed as necessary. These parameters can be combined with -tt, as well as with each other. These options are supported only on AMD GPUs that report junction and memory temperatures   Added new command-line parameters -tmaxj and -tmaxmem, allowing to decrease the GPU usage when the GPU hotspot (junction), or GPU memory temperatures are above the specified thresholds. These options are supported only on AMD GPUs that report junction and memory temperatures   Added support for AMD Windows drivers 21.3.2, and 21.3.1   Added support for AMD Linux drivers 20.50.x. Use this drivers only if you have Polaris or older GPUs, or the latest RX6x000 GPUs. WARNING: Vega, Radeon VII, and Navi GPUs won’t work with these drivers!   Turn off the zero fan feature on AMD cards whenever a fixed fan speed is used (e.g. -tt -40), or when an auto fan with min fan speed is used (e.g. -tt 63 -minfan 35). To disable this feature, add -fanstop 1 command-line parameter   When -mcdag 1 is specified under Linux, the miner will not wait for the daggen.sh script to finish before starting to generate the DAGs. Instead it will for a fixed 7 seconds. This allows you to do all the following in the daggen.sh: turn off the overclocking of Nvidia GPUs, sleep for 30-60 seconds to allow time for DAG generation, and then re-apply the overclocking of the Nvidia GPUs   Other small improvements and fixes   The support for -ttj, -ttmem, -tmaxj, and -tmaxmem for Nvidia 3090 and 3080 GPUs is not yet ready for release. We hope to have it ready for the final 5.6 release.   For more robust integrity check, you can use our GPG public key, which was verifyed with ETH transaction from our main devfee account as explained here.   Here are the signatures for the files in this release:   PhoenixMiner_5.6d_Windows.zip.asc PhoenixMiner_5.6d_Linux.tar.gz.asc PhoenixMiner_NVRTC_Windows.zip.asc   Happy Mining!        ","categories": ["download"],
        "tags": ["PhoenixMiner"],
        "url": "https://teamredminer.info/download/0.8.3/",
        "teaser": "https://teamredminer.info/assets/images/thumbs/500x300.png"
      },]
