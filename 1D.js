int = setInterval
        if =[port] = 25565

            add 0 

                if 0 = true 

                    do }

                    
                prompt.User = ("Test_Alpha")
                    if User.Receive = ("Test_Alpha")

                    let text = prompt("Test_Alpha = 0")

                prompt = vector1d
                    if vector1d = generate = javaImport

                        import code.Js
                        import mcreator.cmdcode
						
							if mcreator.cmdcode = true
								do }
								
									mc.consistent
									
										renderBlock = ("1D")
											if RenderBlock = sucsessfull
											
												do {
													
											render.json("jsonfile = array")
											
												if array = completedAtPoint
												
												do }
												
												array = vector1d
													if vector1d = fail
													
														do }
								let vector1d = valueOf("150")
								if Object.RenderingObject = ("RENDER")
								
									if RENDER
									 do }
									 
										detect language = dataLanguage
										check language; = indexOf ("village_point")
										
											set joint("use minecraft.exe")
												compile = reduce
												
												import vector1d.rendering.float
												double = prompt("texture")
												
													if texture = dimensional("dimensional_1d")
													
													
														do }
														
															json.array
															use = lwgjl
															
																copy minecraft.exe = double()
																
																
																	set IntegerLimit = 4096 128 4096
																	
																		if IntegerLimit = higherThenValue 
																				}
																				
																					do = value.Object
																						if Object = solid
																						
																							verifyObject = if object ("print 300")
																							
																				use = py("350")
																				
																					if OpenGL = ("RENDER_SUCSESSFULL")
													
						do }
						
							installLibraries = ("LWGJL")
							import vendor.id
							import mcreator.cxlmod
							import mcreator.1dminecraft
							import systemLanguage.language
							import index.language
							
								if }
								
									then }
									
										
										import org.lwjgl.*;
import org.lwjgl.glfw.*;
import org.lwjgl.opengl.*;
import org.lwjgl.system.*;

import java.nio.*;

import static org.lwjgl.glfw.Callbacks.*;
import static org.lwjgl.glfw.GLFW.*;
import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.system.MemoryStack.*;
import static org.lwjgl.system.MemoryUtil.*;


		private long window;

	public void run() {
		System.out.println("Hello LWJGL " + Version.getVersion() + "!");

		init();
		loop();

		// Free the window callbacks and destroy the window
		glfwFreeCallbacks(window);
		glfwDestroyWindow(window);

		// Terminate GLFW and free the error callback
		glfwTerminate();
		glfwSetErrorCallback(null).free();
	}

	private void init() {
		// Setup an error callback. The default implementation
		// will print the error message in System.err.
		GLFWErrorCallback.createPrint(System.err).set();

		// Initialize GLFW. Most GLFW functions will not work before doing this.
		if ( !glfwInit() )
			throw new IllegalStateException("Unable to initialize GLFW");

		// Configure GLFW
		glfwDefaultWindowHints(); // optional, the current window hints are already the default
		glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE); // the window will stay hidden after creation
		glfwWindowHint(GLFW_RESIZABLE, GLFW_TRUE); // the window will be resizable

		// Create the window
		window = glfwCreateWindow(300, 300, "Hello World!", NULL, NULL);
		if ( window == NULL )
			throw new RuntimeException("Failed to create the GLFW window");

		// Setup a key callback. It will be called every time a key is pressed, repeated or released.
		glfwSetKeyCallback(window, (window, key, scancode, action, mods) -> {
			if ( key == GLFW_KEY_ESCAPE && action == GLFW_RELEASE )
				glfwSetWindowShouldClose(window, true); // We will detect this in the rendering loop
		});

		// Get the thread stack and push a new frame
		try ( MemoryStack stack = stackPush() ) {
			IntBuffer pWidth = stack.mallocInt(1); // int*
			IntBuffer pHeight = stack.mallocInt(1); // int*

			// Get the window size passed to glfwCreateWindow
			glfwGetWindowSize(window, pWidth, pHeight);

			// Get the resolution of the primary monitor
			GLFWVidMode vidmode = glfwGetVideoMode(glfwGetPrimaryMonitor());

			// Center the window
			glfwSetWindowPos(
				window,
				(vidmode.width() - pWidth.get(0)) / 2,
				(vidmode.height() - pHeight.get(0)) / 2
			);
		} // the stack frame is popped automatically

		// Make the OpenGL context current
		glfwMakeContextCurrent(window);
		// Enable v-sync
		glfwSwapInterval(1);

		// Make the window visible
		glfwShowWindow(window);
	}

	private void loop() {
		// This line is critical for LWJGL's interoperation with GLFW's
		// OpenGL context, or any context that is managed externally.
		// LWJGL detects the context that is current in the current thread,
		// creates the GLCapabilities instance and makes the OpenGL
		// bindings available for use.
		GL.createCapabilities();

		// Set the clear color
		glClearColor(1.0f, 0.0f, 0.0f, 0.0f);

		// Run the rendering loop until the user has attempted to close
		// the window or has pressed the ESCAPE key.
		while ( !glfwWindowShouldClose(window) ) {
			glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // clear the framebuffer

			glfwSwapBuffers(window); // swap the color buffers

			// Poll for window events. The key callback above will only be
			// invoked during this call.
			glfwPollEvents();
		}
	}

	public static void main(String[] args) {
		new Test_Alpha().run();
	}




main = string }
	if point = ofLanguage
	
	
		set Object.Language = object2
		set LanguageOf = 0
		
			if [larger = 0.10]


								do - ("0")
								
					var = data removal = language
					
					const = lang
					
						Object.Define = DefineLanguageDescription
						
			if = string()
			
				document = ("name")
					get = data("language = setLanguageTypeInterval = setEnglish")

						setLanguage = english
						if = player.Prompt = addCamera("X")
							if X = true	do }

								//Minecraft Encoder

									get = encoder.glfw
import MinecraftEncoder.GLFW


if } 

		import = dataLanguage("language_of_type")

addLanguage = (spanish)

if spanish = rule("RULE_NUMBER_SPANISH")
				get spanishLanguage("https://computerinfo.com/languages/spanish/sjJ3G1Jgir.lang")
				get Language = ("https://computerinfo.com/languages/spanish/spanish.jslang")

do }
addGUI = ("1 = 2")

if SystemError = occured("300 / 2")
				patchOccuredInformations = 0.1

if 1.0 / 0.0 - ("SetMathLanguage = 0")

		get }
if Compability("WIN10_32")

			//Minecraft Encoder Language
			//This is where the minecraft encoder proccesses engine about the language and proccesses it to the user
			//This is so practical it is used in every single game that is a minecraft java encoder language
			//This is where the critical paraller information data lost

				if = get("CRITICAL_PALLALER")

							do }
getInformation = ("https://computerinfo.com/informations/2h5k5h2kyciH6J3yc8H5H2.php")
languageEncoder = ("https://computerinfo.com/library/languageencoder/download/23hKCi6k2iuc.html")

		}
if = dataLoss("happened = (reverseEnginner)")

			get 0

setMaximumIntegerLimit = ("1.797693134862316e+308")
setMaximumTeleportLimit = ("9223372036854775808")
setMaximumChunkRenderLimit = ("4294967296")
setMaximumLowLimit = ("2147483648")
setMaximumCodeLimit = ("1.797693134862316e+308")


if = codeLimit("1.797693134862316e+308") = reached

		set Game = Crashed 

	
Object.Define.action = ("command = tp {PLAYER-NAME} 1.797693134862316e+308 1.797693134862316e+308 1.797693134862316e+308")
if Object.Integer = above

			set JavaScript("setDATALANGUAGE = stop
				")
		close Engine if ("Number.Language = largerThen("1.797693134862316e+308")")

//This is where the engine starts to command itself
//This command is where the command starts to get obvious adding implimintations about SYSKEY_GEN
//This is where the land starts to breakdown using noise generators

noise.Download = ("https://computerinfo.com/noisemap/heightmap/3hKHk56hk2CI52.php")
noise get = info("DATE")
if Noise.Action = ("0")
				if Teleporting = ("gen")

							only GenerateLand("3.630412374213338e+280")

land.Type("generateUntil = 1.797693134862316e+308")
Land.Array("over = 125508240 - gen")

arrayLWGJL

setMaximumAllowedScreenSize("15360x8640")
if AllowedScreen = Bypass
					do }

setMonitorColor = blank
	then do }
	else }
terminate.GLFWErrorCallback = callFallbackGLFW_DRIVER
do call = GLFWDriverCrashMessage.exe		

			setMinimumAllowedScreenSize("128x72")
		if AllowedScreen = Bypass
					do }

revertChanges()
do }			

send.message("Cannot be lower then 128x72")

use program.js = launchMicrosoftOperatingSystems

import mcreator.index

read 1.797693134862316e+308 = POSITIVE_INFINITY
read 0 

return 0;

	getSourceCode = Minecraft




sourceCode = mediaEncoder

if = MicrosoftCompany = NotFound
		or
valued = NEGATIVE_INFINITY
then = "SendText"
if javaScriptArray.MicrosoftCompany = launch.xx: Documentation
on = command.Start = start of 0 set valueOf = 0 setValue if NEGATIVE_INFINITY launchProgram;
program.StartAtDisk: 1 vector;
vector;
library.SystemLanguage = setSystemLanguage of 0 > 16
										at line 0
if line 793 is Missing.Value set valueOf OperatingSystems = 1 instead of InstanceOf = NEGATIVE_INFINITY 
														or POSITIVE_INFINITY Microsoft.Set
														
														warn if = UNREPAIRABLE
																define UNREPAIRABLE = library = cmlib.zip
																		set 0 > ValueOf - 0
if anOperatingSystemNotFound
																		say
																			}}
{
	require("Node.js")
	found = OperatingSystem
	if OperatingSystemNotFoundOrCannotBeFound
																			then do
		require("MicrosoftSayCommandAtJS.js")
																			}
{
	say = "Operating System Not Found"
	if firstWord = DoesntWork }
then
say = "An Operating System Wasnt Found. Try Disconnecting Any Drives That"
line1 = "Dont Contain An Operating System. Press CTRL+ALT+DEL To Restart"
if os = Found = boot.ToOperatingSystem 
																					set valueOf = NEGATIVE_INFINITY > 16
																					set valueOf = POSITIVE_INFINITY > 16
																						then start.OS = 1

or in = 0 valueOf = NEGATIVE_INFINITY
	.setColor("WHITE")
	.setFont("MS-DOS")
	.setBackroundColor("BLACK")
	.setPreferedLanguage("ENGLISH")
if PE = loaded or DETECTED
load = WinPE
																							define WinPE
if WinRE set WinPE
																							launch of 0 valueOf 3 load BasicDrivers
if WinPE_BootDrive_Inserted
																						addSequence = WinPE_BootDrive_Inserted = bootSequenceOrder
																							set BootPriority
[CD - DVD_Drive]
if only USB = Found set BootPriority
[USB Flash - Drive]
if only HDD = Found set BootPriority
[Hard Disk - Drive]
if only SSD = Found set BootPriority
[Solid State - Drive]
if only MotherBoardChipSAJX Found set BootPriority = buttonSequenceOrder in valueOf 16
[AJAX Boot - Priority]
																								
																						start winload.exe if SystemIsLoaded
																							if winload.exe = failure
																							load = WinRE or Object.WinPE
																							
																						start ntoskrnl.exe if SystemIsStarting
																							if = ntoskrnl.exe = failure
																							load = WinRE or Object.AutomaticRepair
																							
																						start winlogon.exe if SystemIsOnSYSTEMAccount
																							if = winlogon.exe = failure
																							load = Object.WindowsLogonFailure
																									}
																										//WORD: \\?\C:\Windows\System32\winlogon.exe Was Not Found. The Remote Procedure Failed	}
																						
																						start userinit.exe if SystemIsLoggingOn
																							if = userinit.exe = failure
																							load = Object.SignOut
																							
																						start wininit.exe if SystemIsLoggingOn
																							if = wininit.exe = failure
																							load = Object.BSOD
//SETREASON: %>@^*%%&^%%
Object.Define = //%>@^%%&^%%
																										}
define.PropertyAs("wininit was not found. call %BSOD%")
																													call BSOD if wininit.exe = Terminated
																															if NotFound 
																																}
																																		call BSOD reason: %>@^*%%&^%%
	setBSOD

setReasonOf = 0
setRegion = 0 set BSOD("BSODType=%WindowsVersion%")
private const 'AJAX Was Not Found. Please Restart Your Computer'
																							start AJAX.EXE if ajax.zip = found
																								if notFound
																									load = Object.Restart

private const 'AJAX Was Found. We Are Starting Your Device'
																							terminate AJAX.EXE if ajax.zip = notfound
																							if notFound
																									load Object.BSOD
																										call BSOD
setReason =//CRITICAL_PROCCESS_DIED
	then if BSODCall = Failure callPrivateConst1
if then
																										typeOf 0
if valueOf = WinPE is 16 setRegionColor = 16777216
																												set pixelDepth = 8192
																												set EachMaximumPixelDepth = 16384 
																												set EachMaximumPixelSize = 16x16
																												set pixelDepthSize = 8x8

if GPU = Inserted
																											call Object.Restart
																												}
																													then setVideoDecoding
setVideoDecoding = add
if drivers = Installed
																													add GPUList = taskManager

	.addVideoDecoding
	.addVideoProccessing
	.addVideoDedicatedMemoryUsage
	.addVideoMemoryUsage
	.addBarOfMemoryUsage
	.addBarOfDedicatedMemoryUsage
	.addGPUName
	.addMaximumGPUMemory
	.addMinimumGPUMemory
	.addMinimumPowerUsage
	.addMaximumPowerUsage
if add(MoreGPU)
																														addMoreGPUList = TaskManager
																													set line 49997 at 0
																															set NEGATIVE_INFINITY at valueOf - 1
																																set INFINITY = 922372036854775807
																																set ABSOLUTE_INFINITY = 1.797E+308
																																set NEGATIVE_INFINITY = -9223372036854775807
																																set ABSOLUTE_NEGATIVE_INFINITY = 1.797E-308
setArray = 0
setArray = 1
if ArrayAtPixels = loadedByCPU or = GPU
GraphicalArray = startArrays 
																															call GraphicalArray
or
if
																																		Programs.MicrosoftLicencing = Failed
																																	set 0 at Line 476402
	in = 0 if Line0 HasNothing send AutomaticRepair.exe
																														start AJAX.zip = axMicrosoft0

vector3 = [RENDER_API]
vector3 = [RENDER_IMAGE]
vector3 = [VGA_RENDERER]
vector3 = [DISPLAY_RENDERER]
vector3 = [REFRESH_RATE_RENDERER]
vector3 = [RAYMIE_LIGHT]
																													}
{
	vector4 = enabledExtenstions
																													
																													at RENDER_API use = AJAX.zip = cmlib.zip
																														at VGA.DRV
																															use VGA.DRV = RenderProgram
																																	define Object.RenderProgram
	vector3 = [RENDERER]
	inf = 0
	if Line = 99978
																																		failed at 0 LineInstall.wim

	for 	
																													}
for %&@ = addCMD = 0 x 1 
																																	}
vector3 = []
addGraphics
setDisplayWallpaper
setColorNormal
if PROGRAM_COMPLETED
																																activate.Windows
if 30DAYS
reach
	% time % at % nexttime %
																																			% date % at % nextmonth %
	set vector3 = inf = in 0
																																	}
if PROGRAM_ANALIZER
																																	failure
																																			private void

	loadDrivers if SystemIsLoaded
																																		if FAILURE = 
																																				}
																																						call BSOD
then
																																					}
																																				call AutomaticRepair
																																					call Initializations
																																					call Drivers
																																					call Basic Drivers
if call = BSOD
																																					show = }
																																						//:(
																																						//Your PC Ran Into A Problem 
																																						//We'll Restart It For You.
																																						//%percentage%% Completed
																																						line 3 = esc1
																																						//Stop Code : %STOP_CODE%
																																						//Technical Information : %TECHNICAL_INFO%
																																					load SOURCE.ZIP
																																						indexOf 0
																																							at 0
																																								valueOf 3 = MicrosoftPaint
setInteger = ("9223372036854775807")
setMaximumIntegerHardLimit = ("1.797E+308")
if integer is HIGHER then HardLimit
render as = POSITIVE_INFINITY
then = call Object.ProgramClose
then = call Object.Repair


decode.Object = OperatingSystems
if
																																										decodingFailed
																																											do
																																									//SAY
																																										//DISPLAY ADAPTER FAILED
																																											set DisplayAdapter
																																												
																																												show = 0 at DISPLAY.DSP
																																													set DISPLAY.DSP = NEGATIVE_INFINITY
do = unloadScreen;
																																												Object.UnloadScreen = setBlank
																																if blank
																																	set BackroundWallpaper = black
	.setColor "BLACK"
		.setColorArray "???AA???A??C????X???"

if config.SystemFileADAPTER.DISPLAY
																																				for % then 9
																																					setAreaDisplayDecodingProccesseces
																																		then 0 if 0 = failed or = 0 DECODE_FAILURE
																																			set DisplayAdapter = updateToMicrosoftBasicDisplayAdapter
																																			only if NoAdapterLeft
																																					
																																					
																																						decodeListing = setCode0

if eachPixels has = sameNumbers
decode("AUTOMATICLLY")
define = 0 PROPERTY.AS
if programIsLaunched
																																							removePatch = DSP - 965094
removeAccessDenied = "ACCESS_DENIED"

private const c_0073
private const c_0074
private const c_3000
const

if characters - char 	
																																							if char = FAILURE
																																								set fontdrvhost.exe
																																								call Object.TerminateFONTDRV
Object.Define = TerminateFONTDRV
commandCommandPrompt
setCommandPromptPrivilleges = SYSTEM
																																								set Object.TerminateFONDRV 
																																									set commandPrompt
addCommand = ("taskkill /f /im fontdrvhost.exe /q /SYSTEM:Yes")

if "%SYSTEMROOT%\%SYS32%\%OOBE%\msoobe.exe"
																																				if notFound 
																																					or }
if failure
																																					then > call.Object.Shutdown
																																						set Object.Shutdown = setBlackScreen
if setBlackScreen function = command
																																						set DISPLAY.DSP = 2147483647 > 0
																																							then set lengthOf DISPLAY.DSP 1080 > 0
if DISPLAY.DSP = functionFailure
																																							then do }
																																								call Object.BSOD
setReason = ('CRITICAL_PROCCESS_DIED')
if setupOrPC = permatureRestart or RestartFailure
do }
																																								call Object.BSOD
setReason('BAD_POOL_HEADER')
if paged is = NONPAGED_AREA
do }
																																								call Object.BSOD
setReason = PAGED_FILE_IN_NONPAGED_FILE
																																							set nonpaged file = NONPAGE.sys
																																							set paged file = PAGEFILE.sys
																																									set paged file
																																										call Object.RAMCZX
																																											set RAMCZX
																																												call Object.CCXLoader
																																											then use Object
																																												set DISPLAY.DSP = 2147483647 > 16777216
																																												then set Length of DISPLAY.DSP = 1080 > 480
if ProgramComplete
																																												set DISPLAY.DSP = 16777216 > 2147483647
																																												the set Length of DISPLAY.DSP = 480 > 1080
																																			}
import Microsoft.LicenceProductSCX
if Microsoft.LicenceProductSCX = importFailure
																																						do }.
{ SetIconFile = 0 }
{ SetBDSODFile = 1 }
{ SetValid = 0 }
{ HeightMapSetBug0 = 256 }
if Failure afterDelay("15s")
do }
Object.AFTERDELAY
import AFTERDELAY
																																										if failure	
																																											do D95.XKC.Object.BSOD	
																																												}
																																													call BSOD
setReason = "TIME_DELAY_FAILURE"
sendInformations = "https://microsoftservers.com/M19x891nmOX9O9195X882u4/mxlw293769/MicrosoftDesktopComputers/PASS763/sendinfo.html"
do }

sendInformations = "https://microsoftservers.com/2i6jmXO8206I3M4X895n2OX9826/receiveServerData/X9673"
setPassword = "mlx2O3Mp1O9X9801786kXP29KZO2856mLZ("
setCertificateArray = "https://microsoftservers/licence/CERTIFICATE_ARRAY.html/GEX_DATA0"
																																													
																																													}
useImportedType = TIME
setTime = "21/6/2007"
setDefaultBIOSDate = 1 / 1 / 2008
setDefaultBIOSTime = 00.00.00
																																														}
import TIME 
																																													then function Properly_CONFIG
																																													if CONFIG_FAILURE set RESET_CONFIG
if CMOS_FAILURE set RESET_CONFIG do }
RESET_BIOS
if FCIC_Failure then
do }

setDate = "1/1/2008"
setTime = "00.00.00"
if FUNCTION_TIME = failure
																																														unload = IMPORTTIME
																																															then do }
Object.BSOD = CSAJV_CKVOX_CRITICAL_SOC
																																																	call Socket364_Shutdown
do
																																																		call BSOD	
																																																		
																																																			setReason = "CMOS_FUNCTION_ERROR"
setETECCode_SENDINFO = "https://microsoftservers.com/lixo86hB2ixo189652Nmlx9126932Nx8927u6mOZ8936/AccessDATA/FULLACCESS/UploadETECINFO_3774/upload_server_info.html"
																																																				load DEPLOYMENTSERVICES
																																																				load DEPLOYMENTDATA
																																																				load DEPLOYMENTPROGRAMS
																																																				
																																																					set CertificateCOFFC = { mps }
																																																					
																																																							}

#LICENCE

if PRESSED = escape	
																																																									do }
followSteps = Sequence.Object.routeEvents
do ]
																																																												then do }
show.DisplayScreen
																																																										set DISPLAY.DSP
1080 > 16
if DONE = set.DisplayScreen 
																																																										set DISPLAY.DSP 16 > 1080
																																																								
																																																									set DISPLAY.DSP

{ SHOWDATALOAD: S037 }

showFollowingMessages =

	"[BOOT OPTIONS]"
"[Windows Boot Manager}"
"[%DISKNAME%]"
"[%SSDNAME%]"
"[%HDDNAME%]"

if selected = select each PIXELS_E90C
if SELECTED = operatingSystem then 
																																																													set bootmgr.sys
"DEFAULTOPERATINGSYSTEMS = %DISKSELECTED%"
																																																										then set % SDDDNAME %
	load WIN if BOOTMGR.SYS change
																																																												load 92794743927.EOC
																																																												load 97499099374.EOC
																																																												then ChangeRegistry = HKEY_LOCAL_MACHINE\SYSTEM\Setup\CmdLine "SetValue" = "CmdLine" = "setup.exe"
																																																												target 0
																																																													
																																																													load oscpu
																																																													load os
																																																													load osgpu
																																																													load osram
																																																													load ostype
																																																													load osmotherboard
																																																													load MotherBoardChipSAJX
																																																													load oschip
																																																													load ossd
																																																													load osdisk
																																																													load bkxdisk
																																																													
																																																														then DO = 9

dim_g = 0
dim_g
																																																																}
if BOOTIMG = found		
																																																																			Type = (".iso") 
																																																																				}
(".img")
if FINIALIZE_SYSTEM
																																																																				 then	do }
SYSREQUIRMENTS

if findSETUP.exe	
																																																																					locate "%c%\autorun.inf"
do REO % c %\autorun.dll"
if setup.exe = found	
																																																																						bootTo = setup.exe noEXPLORER = gui23
if INSTALLING
																																																																								set instanceof INSTALL.WIM = C: \Windows\
if INSTALLING do }
InstallMicrosoft;
IXPInstallations;

do }
VideoDecoding.MicrosoftDEVS
do }
																																																																									add INSTALL.WIM extractto =
	"C:\"
																																																																										convert C: \ = gpt
instantREO;

py

if }
																																																																									image Reset		
																																																																									
																																																																											}
																																																																									spawn image = cmdsc.png
if SETUP.EXE = failure
																																																																										
																																																																										start.string
searchfor()


for = track("uppercase") = searchfor("3641")
																																																																								
																																																																								add support = to("normal-games = ("java.library")")			
																																																															do { }
	add surface = vector2

addgame("support = java.library")
addcertificate("https://192.168.185.22:25565/2j5KXN3412iYXKh5k2yix23i54X/internal/certificate.gccx/verified=true")

if = certificate = verifiedAs("false")
							do }

math.logic = data inform("inf")
includes("incfont")
	in 0


if data length Buffer;
															
																	set strengthOf("userData = initData.ConfigConstructor("image.html")")

if ("strengthof("DATA_PRESENT_CONFIG
")")


if ("DATA_TRANSFER = Sucsessfull")
																						
																					
																	add java.library


























exit

get windowsActivate

private const L_optInstallProductKey = "ipk"
private const L_optInstallProductKeyUsage = "Install product key (replaces existing key)"

private const L_optUninstallProductKey = "upk"
private const L_optUninstallProductKeyUsage = "Uninstall product key"

private const L_optActivateProduct = "ato"
private const L_optActivateProductUsage = "Activate Windows"

private const L_optDisplayInformation = "dli"
private const L_optDisplayInformationUsage = "Display license information (default: current license)"

private const L_optDisplayInformationVerbose = "dlv"
private const L_optDisplayInformationUsageVerbose = "Display detailed license information (default: current license)"

private const L_optExpirationDatime = "xpr"
private const L_optExpirationDatimeUsage = "Expiration date for current license state"

'Advanced options
private const L_optClearPKeyFromRegistry = "cpky"
private const L_optClearPKeyFromRegistryUsage = "Clear product key from the registry (prevents disclosure attacks)"

private const L_optInstallLicense = "ilc"
private const L_optInstallLicenseUsage = "Install license"

private const L_optReinstallLicenses = "rilc"
private const L_optReinstallLicensesUsage = "Re-install system license files"

private const L_optDisplayIID = "dti"
private const L_optDisplayIIDUsage = "Display Installation ID for offline activation"

private const L_optPhoneActivateProduct = "atp"
private const L_optPhoneActivateProductUsage = "Activate product with user-provided Confirmation ID"

private const L_optReArmWindows = "rearm"
private const L_optReArmWindowsUsage = "Reset the licensing status of the machine"

private const L_optReArmApplication = "rearm-app"
private const L_optReArmApplicationUsage = "Reset the licensing status of the given app"

private const L_optReArmSku = "rearm-sku"
private const L_optReArmSkuUsage = "Reset the licensing status of the given sku"

'KMS options

private const L_optSetKmsName = "skms"
private const L_optSetKmsNameUsage = "Set the name and/or the port for the KMS computer this machine will use. IPv6 address must be specified in the format [hostname]:port"

private const L_optClearKmsName = "ckms"
private const L_optClearKmsNameUsage = "Clear name of KMS computer used (sets the port to the default)"

private const L_optSetKmsLookupDomain = "skms-domain"
private const L_optSetKmsLookupDomainUsage = "Set the specific DNS domain in which all KMS SRV records can be found. This setting has no effect if the specific single KMS host is set via /skms option."

private const L_optClearKmsLookupDomain = "ckms-domain"
private const L_optClearKmsLookupDomainUsage = "Clear the specific DNS domain in which all KMS SRV records can be found. The specific KMS host will be used if set via /skms. Otherwise default KMS auto-discovery will be used."

private const L_optSetKmsHostCaching = "skhc"
private const L_optSetKmsHostCachingUsage = "Enable KMS host caching"

private const L_optClearKmsHostCaching = "ckhc"
private const L_optClearKmsHostCachingUsage = "Disable KMS host caching"

private const L_optSetActivationInterval = "sai"
private const L_optSetActivationIntervalUsage = "Set interval (minutes) for unactivated clients to attempt KMS connection. The activation interval must be between 15 minutes (min) and 30 days (max) although the default (2 hours) is recommended."

private const L_optSetRenewalInterval = "sri"
private const L_optSetRenewalIntervalUsage = "Set renewal interval (minutes) for activated clients to attempt KMS connection. The renewal interval must be between 15 minutes (min) and 30 days (max) although the default (7 days) is recommended."

private const L_optSetKmsListenPort = "sprt"
private const L_optSetKmsListenPortUsage = "Set TCP port KMS will use to communicate with clients"

private const L_optSetDNS = "sdns"
private const L_optSetDNSUsage = "Enable DNS publishing by KMS (default)"

private const L_optClearDNS = "cdns"
private const L_optClearDNSUsage = "Disable DNS publishing by KMS"

private const L_optSetNormalPriority = "spri"
private const L_optSetNormalPriorityUsage = "Set KMS priority to normal (default)"

private const L_optClearNormalPriority = "cpri"
private const L_optClearNormalPriorityUsage = "Set KMS priority to low"

private const L_optSetVLActivationType = "act-type"
private const L_optSetVLActivationTypeUsage = "Set activation type to 1 (for AD) or 2 (for KMS) or 3 (for Token) or 0 (for all)."

' Token-based Activation options

private const L_optListInstalledILs = "lil"
private const L_optListInstalledILsUsage = "List installed Token-based Activation Issuance Licenses"

private const L_optRemoveInstalledIL = "ril"
private const L_optRemoveInstalledILUsage = "Remove installed Token-based Activation Issuance License"

private const L_optListTkaCerts = "ltc"
private const L_optListTkaCertsUsage = "List Token-based Activation Certificates"

private const L_optForceTkaActivation = "fta"
private const L_optForceTkaActivationUsage = "Force Token-based Activation"



Private Sub DisplayKMSClientInformation(objService, objProduct)
    Dim strKms, strIpAddress, strPort, strOutput
    Dim iVLRenewalInterval, iVLActivationInterval
    Dim bFixedKms, bKmsLookupDomain, strKmsLookupDomain

iVLRenewalInterval = objProduct.VLRenewalInterval
iVLActivationInterval = objProduct.VLActivationInterval

    LineOut ""
    LineOut GetResource("L_MsgVLMostRecentActivationInfo")
    LineOut GetResource("L_MsgKmsInfo")
    LineOut "    " & GetResource("L_MsgCmid") & objService.ClientMachineID

strKmsLookupDomain = objProduct.KeyManagementServiceLookupDomain

    If strKmsLookupDomain <> "" and Not IsNull(strKmsLookupDomain) Then
bKmsLookupDomain = True
        LineOut "    " & GetResource("L_MsgKmsLookupDomain") & strKmsLookupDomain
    End If

strKms = objProduct.KeyManagementServiceMachine

if strKms <> "" And Not IsNull(strKms) Then
bFixedKms = True
strPort = objProduct.KeyManagementServicePort
If(strPort = 0) Then
strPort = DefaultPort
        End If
        LineOut "    " & GetResource("L_MsgRegisteredKmsName") & strKms & ":" & strPort
Else
strKms = objProduct.DiscoveredKeyManagementServiceMachineName
strPort = objProduct.DiscoveredKeyManagementServiceMachinePort

        If IsNull(strKms) Or(strKms = "") Or IsNull(strPort) Or(strPort = 0) Then
            LineOut "    " & GetResource("L_MsgKmsFromDnsUnavailable")
Else
            LineOut "    " & GetResource("L_MsgKmsFromDns") & strKms & ":" & strPort
        End If
    End If

strIpAddress = objProduct.DiscoveredKeyManagementServiceMachineIpAddress

    If IsNull(strIpAddress) Or(strIpAddress = "") Then
        LineOut "    " & GetResource("L_MsgKmsIpAddressUnavailable")
Else
        LineOut "    " & GetResource("L_MsgKmsIpAddress") & strIpAddress
    End If

    LineOut "    " & GetResource("L_MsgKmsPID4") & objProduct.KeyManagementServiceProductKeyID
strOutput = Replace(GetResource("L_MsgActivationInterval"), "%INTERVAL%", iVLActivationInterval)
    LineOut "    " & strOutput
strOutput = Replace(GetResource("L_MsgRenewalInterval"), "%INTERVAL%", iVLRenewalInterval)
    LineOut "    " & strOutput

if (objService.KeyManagementServiceHostCaching = True) Then
        LineOut "    " & GetResource("L_MsgKmsHostCachingEnabled")
Else
        LineOut "    " & GetResource("L_MsgKmsHostCachingDisabled")
    End If

    If bKmsLookupDomain And bFixedKms Then
        LineOut ""
        LineOut Replace(GetResource("L_MsgKmsUseMachineNameOverrides"), "%KMS%", strKms & ":" & strPort)
    End If
End Sub

Private Sub DisplayAVMAClientInformation(objProduct)
    Dim strHostName, strPid
    Dim displayDate
    Dim bHostName, bFiletime, bPid

strHostName = objProduct.AutomaticVMActivationHostMachineName
bHostName = strHostName <> "" And Not IsNull(strHostName)

    Set displayDate = CreateObject("WBemScripting.SWbemDateTime")
displayDate.Value = objProduct.AutomaticVMActivationLastActivationTime
bFiletime = displayDate.GetFileTime(false) <> 0

strPid = objProduct.AutomaticVMActivationHostDigitalPid2
bPid = strPid <> "" And Not IsNull(strPid)

    If bHostName Or bFiletime Or bPid Then
        LineOut ""
        LineOut GetResource("L_MsgVLMostRecentActivationInfo")
        LineOut GetResource("L_MsgAVMAInfo")

        If bHostName Then
            LineOut "    " & GetResource("L_MsgAVMAHostMachineName") & strHostName
Else
            LineOut "    " & GetResource("L_MsgAVMAHostMachineName") & GetResource("L_MsgNotAvailable")
        End If

        If bFiletime Then
            LineOut "    " & GetResource("L_MsgAVMALastActTime") & displayDate.GetVarDate
Else
            LineOut "    " & GetResource("L_MsgAVMALastActTime") & GetResource("L_MsgNotAvailable")
        End If

        If bPid Then
            LineOut "    " & GetResource("L_MsgAVMAHostPid2") & strPid
Else
            LineOut "    " & GetResource("L_MsgAVMAHostPid2") & GetResource("L_MsgNotAvailable")
        End If
    End If

End Sub

'
' Display all information for /dlv and /dli
' If you add need to access new properties through WMI you must add them to the
' queries for service/object.  Be sure to check that the object properties in DisplayAllInformation()
' are requested for function/methods such as GetIsPrimaryWindowsSKU() and DisplayKMSClientInformation().
'
Private Sub DisplayAllInformation(strParm, bVerbose)
    Dim objService, objProduct
    Dim strServiceSelectClause
    Dim objProductIter, strIterSelectClause, strProductSelectClause
    Dim strDescription, bKmsClient, strSLActID, bKmsServer, bTBL
    Dim strAVMAId, bAVMA
    Dim ls, gpMin, gpDay, displayDate
    Dim strOutput
    Dim strUrl
    Dim bShowSkuInformation
    Dim iIsPrimaryWindowsSku, bUseDefault
    Dim productKeyFound

    Dim strErr
strParm = LCase(strParm)
productKeyFound = False

strServiceSelectClause = _
"KeyManagementServiceListeningPort, KeyManagementServiceDnsPublishing, " & _
"KeyManagementServiceLowPriority, ClientMachineId, KeyManagementServiceHostCaching, " & _
"Version"

strProductSelectClause = _
ProductIsPrimarySkuSelectClause & ", " & _
"ProductKeyID, ProductKeyChannel, OfflineInstallationId, " & _
"ProcessorURL, MachineURL, UseLicenseURL, ProductKeyURL, ValidationURL, " & _
"GracePeriodRemaining, LicenseStatus, LicenseStatusReason, EvaluationEndDate, " & _
"VLRenewalInterval, VLActivationInterval, KeyManagementServiceLookupDomain, KeyManagementServiceMachine, " & _
"KeyManagementServicePort, DiscoveredKeyManagementServiceMachineName, " & _
"DiscoveredKeyManagementServiceMachinePort, DiscoveredKeyManagementServiceMachineIpAddress, KeyManagementServiceProductKeyID," & _
"TokenActivationILID, TokenActivationILVID, TokenActivationGrantNumber," & _
"TokenActivationCertificateThumbprint, TokenActivationAdditionalInfo, TrustedTime," & _
"ADActivationObjectName, ADActivationObjectDN, ADActivationCsvlkPid, ADActivationCsvlkSkuId, VLActivationTypeEnabled, VLActivationType," & _
"IAID, AutomaticVMActivationHostMachineName, AutomaticVMActivationLastActivationTime, AutomaticVMActivationHostDigitalPid2"
    
    If bVerbose Then
strServiceSelectClause = "RemainingWindowsReArmCount, " & strServiceSelectClause
strProductSelectClause = "RemainingAppReArmCount, RemainingSkuReArmCount, " & strProductSelectClause
    End If

    set objService = GetServiceObject(strServiceSelectClause)

    If bVerbose Then
        LineOut GetResource("L_MsgServiceVersion") & objService.Version
    End If

If(strParm = "all") Then
strIterSelectClause = strProductSelectClause
Else
strIterSelectClause = ProductIsPrimarySkuSelectClause
    End If

    For Each objProductIter in GetProductCollection(strIterSelectClause, EmptyWhereClause)

strSLActID = objProductIter.ID

' Display information if:
'    parm = "all" or
'    ActID = parm or
'    default to current ActID (parm = "" and IsPrimaryWindowsSKU is 1 or 2)
iIsPrimaryWindowsSku = GetIsPrimaryWindowsSKU(objProductIter)
bUseDefault = False
bShowSkuInformation = False

If(strParm = "" And((iIsPrimaryWindowsSku = 1) Or(iIsPrimaryWindowsSku = 2))) Then
bUseDefault = True
bShowSkuInformation = True
        End If

If(strParm = "" And(objProductIter.LicenseIsAddon And objProductIter.PartialProductKey <> "")) Then
bShowSkuInformation = True
        End If

If(strParm = "all") Then
bShowSkuInformation = True
        End If

If(strParm = LCase(strSLActID)) Then
bShowSkuInformation = True
        End If

If(bShowSkuInformation) Then

If(strParm = "all") Then
                set objProduct = objProductIter
Else
                set objProduct = GetProductObject(strProductSelectClause, "id = '" & objProductIter.ID & "'")
            End If

strDescription = objProduct.Description

'If the user didn't specify anything and we are showing the default case, warn them
' if this can't be verified as the primary SKU
If((bUseDefault = True) And(iIsPrimaryWindowsSku = 2)) Then
OutputIndeterminateOperationWarning(objProduct)
            End IF

productKeyFound = True

            LineOut ""
            LineOut GetResource("L_MsgProductName") & objProduct.Name

            LineOut GetResource("L_MsgProductDesc") & strDescription

            If objProduct.TokenActivationAdditionalInfo <> "" Then
                LineOut Replace(_
                    GetResource("L_MsgTkaInfoAdditionalInfo"), _
                    "%MOREINFO%", _
                    objProduct.TokenActivationAdditionalInfo _
)
            End If

bKmsServer = IsKmsServer(strDescription)
bKmsClient = IsKmsClient(strDescription)
bTBL = IsTBL(strDescription)
bAVMA = IsAVMA(strDescription)

            If bVerbose Then
                LineOut GetResource("L_MsgActID") & strSLActID
                LineOut GetResource("L_MsgAppID") & objProduct.ApplicationID
                LineOut GetResource("L_MsgPID4") & objProduct.ProductKeyID
                LineOut GetResource("L_MsgChannel") & objProduct.ProductKeyChannel
                LineOut GetResource("L_MsgInstallationID") & objProduct.OfflineInstallationId

If(NOT bKmsClient) AND(NOT bAVMA) Then

'Note that we are re-using the UseLicenseURL for the Product Activation
'URL for down-level compatibility reasons

strUrl = objProduct.ProcessorURL
                    If strUrl <> "" Then
                        LineOut GetResource("L_MsgProcessorCertUrl") & strUrl
                    End If

strUrl = objProduct.MachineURL
                    If strUrl <> "" Then
                        LineOut GetResource("L_MsgMachineCertUrl") & strUrl
                    End If

strUrl = objProduct.UseLicenseURL
                    If strUrl <> "" Then
                        LineOut GetResource("L_MsgUseLicenseCertUrl") & strUrl
                    End If

strUrl = objProduct.ProductKeyURL
                    If strUrl <> "" Then
                        LineOut GetResource("L_MsgPKeyCertUrl") & strUrl
                    End If

strUrl = objProduct.ValidationURL
                    If strUrl <> "" Then
                        LineOut GetResource("L_MsgValidationUrl") & strUrl
                    End If

                End If
            End If

            If objProduct.PartialProductKey <> "" Then
                LineOut GetResource("L_MsgPartialPKey") & objProduct.PartialProductKey
Else
                LineOut GetResource("L_MsgErrorLicenseNotInUse")
            End If

ls = objProduct.LicenseStatus

            If ls = 0 Then
                LineOut GetResource("L_MsgLicenseStatusUnlicensed_1")

            ElseIf ls = 1 Then
                LineOut GetResource("L_MsgLicenseStatusLicensed_1")
gpMin = objProduct.GracePeriodRemaining
If(gpMin <> 0) Then
gpDay = GetDaysFromMins(gpMin)
If(bTBL) Then
strOutput = Replace(GetResource("L_MsgLicenseStatusTBL_1"), "%MINUTE%", gpMin)
ElseIf(bAVMA) Then
strOutput = Replace(GetResource("L_MsgLicenseStatusAVMA_1"), "%MINUTE%", gpMin)
Else
strOutput = Replace(GetResource("L_MsgLicenseStatusVL_1"), "%MINUTE%", gpMin)
                    End If
strOutput = Replace(strOutput, "%DAY%", gpDay)
                    LineOut strOutput
                End If

            ElseIf ls = 2 Then
                LineOut GetResource("L_MsgLicenseStatusInitialGrace_1")
gpMin = objProduct.GracePeriodRemaining
gpDay = GetDaysFromMins(gpMin)
strOutput = Replace(GetResource("L_MsgLicenseStatusTimeRemaining"), "%MINUTE%", gpMin)
strOutput = Replace(strOutput, "%DAY%", gpDay)
                LineOut strOutput

            ElseIf ls = 3 Then
                LineOut GetResource("L_MsgLicenseStatusAdditionalGrace_1")
gpMin = objProduct.GracePeriodRemaining
gpDay = GetDaysFromMins(gpMin)
strOutput = Replace(GetResource("L_MsgLicenseStatusTimeRemaining"), "%MINUTE%", gpMin)
strOutput = Replace(strOutput, "%DAY%", gpDay)
                LineOut strOutput

            ElseIf ls = 4 Then
                LineOut GetResource("L_MsgLicenseStatusNonGenuineGrace_1")
gpMin = objProduct.GracePeriodRemaining
gpDay = GetDaysFromMins(gpMin)
strOutput = Replace(GetResource("L_MsgLicenseStatusTimeRemaining"), "%MINUTE%", gpMin)
strOutput = Replace(strOutput, "%DAY%", gpDay)
                LineOut strOutput

            ElseIf ls = 5 Then
                LineOut GetResource("L_MsgLicenseStatusNotification_1")
strErr = CStr(Hex(objProduct.LicenseStatusReason))
if (objProduct.LicenseStatusReason = HR_SL_E_NOT_GENUINE) Then
strOutput = Replace(GetResource("L_MsgNotificationErrorReasonNonGenuine"), "%ERRCODE%", strErr)
ElseIf(objProduct.LicenseStatusReason = HR_SL_E_GRACE_TIME_EXPIRED) Then
strOutput = Replace(GetResource("L_MsgNotificationErrorReasonExpiration"), "%ERRCODE%", strErr)
Else
strOutput = Replace(GetResource("L_MsgNotificationErrorReasonOther"), "%ERRCODE%", strErr)
                End If
                LineOut strOutput

            ElseIf ls = 6 Then
                LineOut GetResource("L_MsgLicenseStatusExtendedGrace_1")
gpMin = objProduct.GracePeriodRemaining
gpDay = GetDaysFromMins(gpMin)
strOutput = Replace(GetResource("L_MsgLicenseStatusTimeRemaining"), "%MINUTE%", gpMin)
strOutput = Replace(strOutput, "%DAY%", gpDay)
                LineOut strOutput

Else
                LineOut GetResource("L_MsgLicenseStatusUnknown")
            End If

If(ls <> 0 And bVerbose) Then
                Set displayDate = CreateObject("WBemScripting.SWbemDateTime")
displayDate.Value = objProduct.EvaluationEndDate
If(displayDate.GetFileTime(false) <> 0) Then
                    LineOut GetResource("L_MsgLicenseStatusEvalEndData") & displayDate.GetVarDate
                End If
            End If

If(bVerbose) Then
If(LCase(objProduct.ApplicationId) = WindowsAppId) Then
                    LineOut Replace(GetResource("L_MsgRemainingWindowsRearmCount"), "%COUNT%", objService.RemainingWindowsReArmCount)
Else
                    LineOut Replace(GetResource("L_MsgRemainingAppRearmCount"), "%COUNT%", objProduct.RemainingAppReArmCount)
                End If
                LineOut Replace(GetResource("L_MsgRemainingSkuRearmCount"), "%COUNT%", objProduct.RemainingSkuReArmCount)

                Set displayDate = CreateObject("WBemScripting.SWbemDateTime")
displayDate.Value = objProduct.TrustedTime
If(displayDate.GetFileTime(false) <> 0) Then
                    LineOut GetResource("L_MsgCurrentTrustedTime") & displayDate.GetVarDate
                End If

            End If

'
' KMS client properties
'

            If bKmsClient Then

If(objProduct.VLActivationTypeEnabled = 1) Then
                    LineOut GetResource("L_MsgVLActivationTypeAD")
ElseIf(objProduct.VLActivationTypeEnabled = 2) Then
                    LineOut GetResource("L_MsgVLActivationTypeKMS")
ElseIf(objProduct.VLActivationTypeEnabled = 3) Then
                    LineOut GetResource("L_MsgVLActivationTypeToken")
Else
                    LineOut GetResource("L_MsgVLActivationTypeAll")
                End If

                If IsADActivated(objProduct) Then
                    DisplayADClientInformation objService, objProduct
                ElseIf IsTokenActivated(objProduct) Then
                    DisplayTkaClientInformation objService, objProduct
                ElseIf ls <> 1 Then
                    LineOut GetResource("L_MsgPleaseActivateRefreshKMSInfo")
Else
                    DisplayKMSClientInformation objService, objProduct
                End If
            End If

If(bKmsServer Or(iIsPrimaryWindowsSku = 1) Or(iIsPrimaryWindowsSku = 2)) Then
                DisplayKMSInformation objService, objProduct
            End If

If(bAVMA) Then
strAVMAId = objProduct.IAID

                If strAVMAId <> "" And Not IsNull(strAVMAId) Then
                    LineOut GetResource("L_MsgAVMAID") & strAVMAId
Else
                    LineOut GetResource("L_MsgAVMAID") & GetResource("L_MsgNotAvailable")
                End If

                DisplayAVMAClientInformation objProduct
            End If

'We should stop processing if we aren't processing All and either we were told to process a single
'entry only or we found the primary SKU
            If strParm <> "all" Then
If(strParm = LCase(strSLActID)) Then
                    Exit For  'no need to continue
                End If
            End If

            LineOut ""
        End If
Next

    If productKeyFound = False Then
        LineOut GetResource("L_MsgErrorPKey")
    End If

End Sub

Private Function GetDaysFromMins(iMins)
    Dim iMinsInADay
iMinsInADay = 24 * 60
' VBScript only supports Int truncation or 'evens' rounding, it does not support a CEILING/FLOOR operation or MOD
' To simulate the CEILING operation used for other grace-day calculations in the UX we need to add the # of mins
' in a day minus 1 to the input then divide by the mins in a day
GetDaysFromMins = Int((iMins + iMinsInADay - 1) / iMinsInADay)
End Function

Private Sub InstallProductKey(strProductKey)
    Dim objService, objProduct
    Dim lRet, strDescription, strOutput, strVersion
    Dim iIsPrimaryWindowsSku, bIsKMS

bIsKMS = False

    On Error Resume Next

    set objService = GetServiceObject("Version")
strVersion = objService.Version
objService.InstallProductKey(strProductKey)
QuitIfError()

' Installing a product key could change Windows licensing state.
' Since the service determines if it can shut down and when is the next start time
' based on the licensing state we should reconsume the licenses here.
objService.RefreshLicenseStatus()

    For Each objProduct in GetProductCollection(ProductIsPrimarySkuSelectClause, PartialProductKeyNonNullWhereClause)
strDescription = objProduct.Description

iIsPrimaryWindowsSku = GetIsPrimaryWindowsSKU(objProduct)
If(iIsPrimaryWindowsSku = 2) Then
OutputIndeterminateOperationWarning(objProduct)
        End If

        If IsKmsServer(strDescription) Then
bIsKMS = True
            Exit For
        End If
Next

If(bIsKMS = True) Then
' Set the KMS version in the registry (64 and 32 bit versions)
lRet = SetRegistryStr(HKEY_LOCAL_MACHINE, SLKeyPath, "KeyManagementServiceVersion", strVersion)
If(lRet <> 0) Then
            QuitWithError lRet
        End If

        If ExistsRegistryKey(HKEY_LOCAL_MACHINE, SLKeyPath32) Then
lRet = SetRegistryStr(HKEY_LOCAL_MACHINE, SLKeyPath32, "KeyManagementServiceVersion", strVersion)
If(lRet <> 0) Then
                QuitWithError lRet
            End If
        End If
Else
' Clear the KMS version in the registry (64 and 32 bit versions)
lRet = DeleteRegistryValue(HKEY_LOCAL_MACHINE, SLKeyPath, "KeyManagementServiceVersion")
If(lRet <> 0 And lRet <> 2 And lRet <> 5) Then
            QuitWithError lRet
        End If

lRet = DeleteRegistryValue(HKEY_LOCAL_MACHINE, SLKeyPath32, "KeyManagementServiceVersion")
If(lRet <> 0 And lRet <> 2 And lRet <> 5) Then
            QuitWithError lRet
        End If
    End If

strOutput = Replace(GetResource("L_MsgInstalledPKey"), "%PKEY%", strProductKey)
    LineOut strOutput
End Sub

Private Sub OutputIndeterminateOperationWarning(objProduct)
    Dim strOutput

    LineOut GetResource("L_MsgUndeterminedPrimaryKeyOperation")
strOutput = Replace(GetResource("L_MsgUndeterminedOperationFormat"), "%PRODUCTDESCRIPTION%", objProduct.Description)
strOutput = Replace(strOutput, "%PRODUCTID%", objProduct.ID)
    LineOut strOutput
End Sub

Private Sub ClearPKeyFromRegistry()
    Dim objService

    On Error Resume Next

    set objService = GetServiceObject("Version")
QuitIfError()

objService.ClearProductKeyFromRegistry()
QuitIfError()

    LineOut GetResource("L_MsgClearedPKey")
End Sub

Private Sub InstallLicenseFiles(strParentDirectory, fso)
    Dim file, files, folder, subFolder

    Set folder = fso.GetFolder(strParentDirectory)
    Set files = folder.Files



/*
 * Copyright (c) 2006, 2016, Oracle and/or its affiliates. All rights reserved.
 * ORACLE PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Oracle nor the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * deployJava.js
 *
 * This file is part of the Deployment Toolkit.  It provides functions for web
 * pages to detect the presence of a JRE and easily run
 * applets or Web Start programs.  More Information on usage of the
 * Deployment Toolkit can be found in the Deployment Guide at:
 * https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/
 *
 * The "live" copy of this file may be found at :
 * http://java.com/js/deployJava.js.
 * For web pages provisioned using https, you may want to access the copy at:
 * https://java.com/js/deployJava.js.
 *
 * You are encouraged to link directly to the live copies.
 * The above files are stripped of comments and whitespace for performance,
 * You can access this file w/o the whitespace and comments removed at:
 * https://java.com/js/deployJava.txt.
 *
 */

/*    The following regular expression is used as the base for the parsing
 *    of the version string. The version string could be either in the old format
 *    (1.7.0_65, 1.7.0, 1.7) or in the new format (9.1.2.3, 9.1.2, 9.1, 9)
 *    and must include only VNUM parts of the version string (the full
 *    version string format is $VNUM(-$PRE)?(\+$BUILD)?(-$OPT)?, see JEP 223 for more details) 
 *
 *    ^               - Beginning of the string
 *      (             - Capturing group 1
 *        \\d+        - Match any digit one or more times
 *     )              - Match once
 *     (?:            - Non capturing group
 *       \\.          - Match '.' character
 *       (            - Capturing group 2
 *         \\d+       - Match any digit one or more times
 *       )            - Match once
 *       (?:          - Non capturing group
 *         \\.        - Match '.' character
 *         (          - Capturing group 3
 *           \\d+     - Match any digit one or more times
 *         )          - Match once
 *         (?:        - Non capturing group
 *	     [_\\.]   - Math '_' (old version format) or '.' (new version format)
 *           (        - Capturing group 4
 *             \\d+   - Match any digit one or more times
 *           )        - Match once
 *         )?         - Match zero or one time
 *       )?           - Match zero or one time
 *     )?             - Match zero or one time
 *
 *            
 *
 */

var version_regex_base = "^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?";

/*
*           version_regex_base - see version_regex_base comment above
*           $                  - End of the string 
* 
*/


var version_regex_strict = version_regex_base + "$";

/*
*           version_regex_base - see version_regex_base comment above
*           (                  - Capturing group 5
*             \\*              - Match '*'
*             |                - OR
*             \\+              - Match '+'
*           )?                 - Match zero or one time 
*           $                  - End of string 
* 
*/
var version_regex_with_family_modifier = version_regex_base + "(\\*|\\+)?$";


var deployJava = function () {
    /** HTML attribute filter implementation */
    var hattrs = {
        core: ['id', 'class', 'title', 'style'],
        i18n: ['lang', 'dir'],
        events: ['onclick', 'ondblclick', 'onmousedown', 'onmouseup',
            'onmouseover', 'onmousemove', 'onmouseout', 'onkeypress',
            'onkeydown', 'onkeyup'],
        applet: ['codebase', 'code', 'name', 'archive', 'object',
            'width', 'height', 'alt', 'align', 'hspace', 'vspace'],
        object: ['classid', 'codebase', 'codetype', 'data', 'type',
            'archive', 'declare', 'standby', 'height', 'width', 'usemap',
            'name', 'tabindex', 'align', 'border', 'hspace', 'vspace']
    };

    var object_valid_attrs = hattrs.object.concat(hattrs.core, hattrs.i18n,
        hattrs.events);
    var applet_valid_attrs = hattrs.applet.concat(hattrs.core);

    // startsWith() is not supported by IE
    if (typeof String.prototype.startsWith !== 'function') {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        }
    }

    // generic log function, use console.log unless it isn't available
    // then revert to alert()
    function log(message) {
        if (!rv.debug) { return };

        if (console.log) {
            console.log(message);
        } else {
            alert(message);
        }
    }

    function showMessageBox() {
        var message = 'Java Plug-in is not supported by this browser. <a href="https://java.com/dt-redirect">More info</a>';
        var mbStyle = 'background-color: #ffffce;text-align: left;border: solid 1px #f0c000; padding: 1.65em 1.65em .75em 0.5em; font-family: Helvetica, Arial, sans-serif; font-size: 75%; bottom:0; left:0; right:0; position:fixed; margin:auto; opacity:0.9; width:400px;';
        var messageStyle = "border: .85px; margin:-2.2em 0 0.55em 2.5em;";
        var closeButtonStyle = "margin-left:10px;font-weight:bold;float:right;font-size:22px;line-height:20px;cursor:pointer;color:red;"
        var messageBox = '<span style="' + closeButtonStyle + '" onclick="this.parentElement.style.display=\'none\';">&times;</span><img src="https://java.com/js/alert_16.png"><div style="' + messageStyle + '"><p>' + message + '</p>';


        var divTag = document.createElement("div");
        divTag.id = "messagebox";
        divTag.setAttribute('style', mbStyle);
        divTag.innerHTML = messageBox;
        document.body.appendChild(divTag);

    }

    //checks where given version string matches query
    //
    //NB: assume format is correct. Can add format check later if needed
    // from dtjava.js
    function versionCheckEx(query, version) {
        if (query == null || query.length == 0) return true;

        var c = query.charAt(query.length - 1);

        //if it is not explicit pattern but does not have update version then need to append *
        if (c != '+' && c != '*' && (query.indexOf('_') != -1 && c != '_')) {
            query = query + "*";
            c = '*';
        }

        query = query.substring(0, query.length - 1);
        //if query ends with ".", "_" then we want to strip it to allow match of "1.6.*" to shorter form such as "1.6"
        //TODO: add support for match of "1.7.0*" to "1.7"?
        if (query.length > 0) {
            var z = query.charAt(query.length - 1);
            if (z == '.' || z == '_') {
                query = query.substring(0, query.length - 1);
            }
        }
        if (c == '*') {
            //it is match if version starts from it
            return (version.indexOf(query) == 0);
        } else if (c == '+') {
            //match if query string is lexicographically smaller
            return query <= version;
        }
        return false;
    }

    function doVersionCheck(versionPattern, noplugin) {
        var index = 0;

        var matchData = versionPattern.match(version_regex_with_family_modifier);
        if (matchData != null) {
            if (noplugin) {
                return true;
            }
            // default is exact version match
            // examples:
            //    local machine has 1.7.0_04 only installed
            //    exact match request is "1.7.0_05":  return false
            //    family match request is "1.7.0*":   return true
            //    minimum match request is "1.6+":    return true
            var familyMatch = false;
            var minMatch = false;

            var patternArray = new Array();

            for (var i = 1; i < matchData.length; ++i) {
                // browser dependency here.
                // Fx sets 'undefined', IE sets '' string for unmatched groups
                if ((typeof matchData[i] == 'string') && (matchData[i] != '')) {
                    patternArray[index] = matchData[i];
                    index++;
                }
            }

            if (patternArray[patternArray.length - 1] == '+') {
                // + specified in request - doing a minimum match
                minMatch = true;
                familyMatch = false;
                patternArray.length--;
            } else if (patternArray[patternArray.length - 1] == '*') {
                // * specified in request - doing a family match
                minMatch = false;
                familyMatch = true;
                patternArray.length--;
            } else if (patternArray.length < 4) {
                // versionPattern does not include all four version components
                // and does not end with a star or plus, it will be treated as 
                // if it ended with a star. (family match)
                minMatch = false;
                familyMatch = true;
            }

            var list = deployJava.getJREs();
            for (var i = 0; i < list.length; ++i) {
                if (deployJava.compareVersionToPattern(list[i], patternArray,
                    familyMatch, minMatch)) {
                    return true;
                }
            }

            return false;
        } else {
            var msg = 'Invalid versionPattern passed to versionCheck: ' +
                versionPattern;
            log('[versionCheck()] ' + msg);
            alert(msg);
            return false;
        }
    }

    function isWebStartFound() {
        return doVersionCheck('1.7.0+', false);
    }

    function isAbsoluteUrl(url) {
        var protocols = ["http://", "https://", "file://"];
        for (var i = 0; i < protocols.length; i++) {
            if (url.toLowerCase().startsWith(protocols[i])) {
                return true;;
            }
        }
        return false;
    }

    function getAbsoluteUrl(jnlp) {
        var absoluteUrl;
        if (isAbsoluteUrl(jnlp)) {
            absoluteUrl = jnlp;
        } else {
            var location = window.location.href;
            var pos = location.lastIndexOf('/');
            var docbase = pos > -1 ? location.substring(0, pos + 1) : location + '/';
            absoluteUrl = docbase + jnlp;
        }
        return absoluteUrl;
    }

    function launchWithJnlpProtocol(jnlp) {
        document.location = "jnlp:" + getAbsoluteUrl(jnlp);
    }

    function isNoPluginWebBrowser() {
        var browser = deployJava.getBrowser();
        if (browser == "Edge" || deployJava.browserName2 == 'Chrome' ||
            (deployJava.browserName2 == 'FirefoxNoPlugin' && !doVersionCheck("1.8*", false)) ||
            deployJava.browserName2 == 'NoActiveX') {
            return true;
        }
        return false;
    }

    function getWebStartLaunchIconURL() {
        var imageUrl = '//java.com/js/webstart.png';
        try {
            // for http/https; use protocol less url; use http for all other protocol
            return document.location.protocol.indexOf('http') != -1 ?
                imageUrl : 'https:' + imageUrl;
        } catch (err) {
            return 'https:' + imageUrl;
        }
    }

    // GetJava page
    function constructGetJavaURL(query) {

        var getJavaURL = 'https://java.com/dt-redirect';

        if (query == null || query.length == 0) return getJavaURL;
        if (query.charAt(0) == '&') {
            query = query.substring(1, query.length);
        }
        return getJavaURL + '?' + query;
    }

    function arHas(ar, attr) {
        var len = ar.length;
        for (var i = 0; i < len; i++) {
            if (ar[i] === attr) return true;
        }
        return false;
    }

    function isValidAppletAttr(attr) {
        return arHas(applet_valid_attrs, attr.toLowerCase());
    }

    function isValidObjectAttr(attr) {
        return arHas(object_valid_attrs, attr.toLowerCase());
    }

    /** 
     * returns true if we can enable DT plugin auto-install without chance of
     * deadlock on cert mismatch dialog
     *
     * requestedJREVersion param is optional - if null, it will be
     * treated as installing any JRE version
     * 
     * DT plugin for 6uX only knows about JRE installer signed by SUN cert.
     * If it encounter Oracle signed JRE installer, it will have chance of
     * deadlock when running with IE.  This function is to guard against this.
     */
    function enableWithoutCertMisMatchWorkaround(requestedJREVersion) {

        // Non-IE browser are okay
        if ('MSIE' != deployJava.browserName) return true;

        // if DT plugin is 10.0.0 or above, return true
        // This is because they are aware of both SUN and Oracle signature and
        // will not show cert mismatch dialog that might cause deadlock
        if (deployJava.compareVersionToPattern(deployJava.getPlugin().version,
            ["10", "0", "0"], false, true)) {
            return true;
        }

        // If we got there, DT plugin is 6uX

        if (requestedJREVersion == null) {
            // if requestedJREVersion is not defined - it means ANY.
            // can not guarantee it is safe to install ANY version because 6uX 
            // DT does not know about Oracle certificates and may deadlock
            return false;
        }

        // 6u32 or earlier JRE installer used Sun certificate
        // 6u33+ uses Oracle's certificate
        // DT in JRE6 does not know about Oracle certificate => can only 
        // install 6u32 or earlier without risk of deadlock
        return !versionCheckEx("1.6.0_33+", requestedJREVersion);
    }

    /* HTML attribute filters */

    var rv = {

        debug: null,

        /* version of deployJava.js */
        version: "20120801",

        firefoxJavaVersion: null,
        useStaticMimeType: false,

        myInterval: null,
        preInstallJREList: null,
        brand: null,
        locale: null,
        installType: null,

        EAInstallEnabled: false,
        EarlyAccessURL: null,


        // mime-type of the DeployToolkit plugin object
        oldMimeType: 'application/npruntime-scriptable-plugin;DeploymentToolkit',
        mimeType: 'application/java-deployment-toolkit',

        /* location of the Java Web Start launch button graphic is right next to
         * deployJava.js at: 
         *    https://java.com/js/webstart.png
         *
         * Use protocol less url here for http/https support
         */
        launchButtonPNG: getWebStartLaunchIconURL(),

        browserName: null,
        browserName2: null,

        /**
         * Returns an array of currently-installed JRE version strings.
         * Version strings are of the form #.#[.#[_#]], with the function returning
         * as much version information as it can determine, from just family
         * versions ("1.4.2", "1.5") through the full version ("1.5.0_06").
         *
         * Detection is done on a best-effort basis.  Under some circumstances
         * only the highest installed JRE version will be detected, and
         * JREs older than 1.4.2 will not always be detected.
         */
        getJREs: function () {
            var list = new Array();
            if (this.isPluginInstalled()) {
                var plugin = this.getPlugin();
                var VMs = plugin.jvms;
                for (var i = 0; i < VMs.getLength(); i++) {
                    list[i] = VMs.get(i).version;
                }
            } else {
                var browser = this.getBrowser();

                if (browser == 'MSIE') {
                    if (this.testUsingActiveX('9')) {
                        list[0] = '9';
                    } else if (this.testUsingActiveX('1.8.0')) {
                        list[0] = '1.8.0';
                    } else if (this.testUsingActiveX('1.7.0')) {
                        list[0] = '1.7.0';
                    } else if (this.testUsingActiveX('1.6.0')) {
                        list[0] = '1.6.0';
                    } else if (this.testUsingActiveX('1.5.0')) {
                        list[0] = '1.5.0';
                    } else if (this.testUsingActiveX('1.4.2')) {
                        list[0] = '1.4.2';
                    } else if (this.testForMSVM()) {
                        list[0] = '1.1';
                    }
                } else if (browser == 'Netscape Family') {
                    this.getJPIVersionUsingMimeType();
                    if (this.firefoxJavaVersion != null) {
                        list[0] = this.firefoxJavaVersion;
                    } else if (this.testUsingMimeTypes('9')) {
                        list[0] = '9';
                    } else if (this.testUsingMimeTypes('1.8')) {
                        list[0] = '1.8.0';
                    } else if (this.testUsingMimeTypes('1.7')) {
                        list[0] = '1.7.0';
                    } else if (this.testUsingMimeTypes('1.6')) {
                        list[0] = '1.6.0';
                    } else if (this.testUsingMimeTypes('1.5')) {
                        list[0] = '1.5.0';
                    } else if (this.testUsingMimeTypes('1.4.2')) {
                        list[0] = '1.4.2';
                    } else if (this.browserName2 == 'Safari') {
                        if (this.testUsingPluginsArray('9')) {
                            list[0] = '9';
                        } else if (this.testUsingPluginsArray('1.8')) {
                            list[0] = '1.8.0';
                        } else if (this.testUsingPluginsArray('1.7')) {
                            list[0] = '1.7.0';
                        } else if (this.testUsingPluginsArray('1.6')) {
                            list[0] = '1.6.0';
                        } else if (this.testUsingPluginsArray('1.5')) {
                            list[0] = '1.5.0';
                        } else if (this.testUsingPluginsArray('1.4.2')) {
                            list[0] = '1.4.2';
                        }
                    }
                }
            }

            if (this.debug) {
                for (var i = 0; i < list.length; ++i) {
                    log('[getJREs()] We claim to have detected Java SE ' + list[i]);
                }
            }

            return list;
        },

        /**
         * Calls this.installLatestJRE() if the requested version of JRE is not installed.
         *
         * The requestVersion string is of the form #[.#[.#[_#]]][+|*],
         * which includes strings such as "1.4", "1.5.0*", and "1.6.0_02+".
         * A star (*) means "any version starting within this family" and
         * a plus (+) means "any version greater or equal to this".
         * "1.5.0*" * matches 1.5.0_06 but not 1.6.0_01, whereas
         * "1.5.0+" matches both.
         *
         */
        installJRE: function (requestVersion) {
            log("The Deployment Toolkit installJRE()  method no longer installs JRE. It just checks " +
                "if the requested version of JRE is installed and calls installLatestJRE() otherwise. " +
                "More Information on usage of the Deployment Toolkit can be found in the " +
                "Deployment Guide at https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/");
            if (requestVersion == 'undefined' || requestVersion == null) {
                requestVersion = '1.1';
            }


            var matchData = requestVersion.match(version_regex_with_family_modifier);

            if (matchData == null) {
                log('Invalid requestVersion argument to installJRE(): ' + requestVersion);
                requestVersion = "1.6";
            }
            if (!this.versionCheck(requestVersion)) {
                return this.installLatestJRE();
            }

            return true;
        },

        /** 
         * returns true if jre auto install for the requestedJREVersion is enabled 
         * for the local system; false otherwise
         *
         * requestedJREVersion param is optional - if not specified, it will be
         * treated as installing any JRE version
         * 
         * DT plugin for 6uX only knows about JRE installer signed by SUN cert.
         * If it encounter Oracle signed JRE installer, it will have chance of
         * deadlock when running with IE.  This function is to guard against this.
         */
        isAutoInstallEnabled: function (requestedJREVersion) {
            // if no DT plugin, return false
            if (!this.isPluginInstalled()) return false;

            if (typeof requestedJREVersion == 'undefined') {
                requestedJREVersion = null;
            }

            return enableWithoutCertMisMatchWorkaround(requestedJREVersion);

        },

        /** 
         * returns true if jre install callback is supported
         * callback support is added since dt plugin version 10.2.0 or above
         */
        isCallbackSupported: function () {
            return this.isPluginInstalled() &&
                this.compareVersionToPattern(this.getPlugin().version,
                    ["10", "2", "0"], false, true);
        },

        /**
         * Redirects the browser window to the java.com JRE installation page,
         * and (if possible) redirects back to the current URL upon successful
         * installation, if the installed version of JRE is below the security 
         * baseline or Deployment Toolkit plugin is not installed or disabled.
         *
         */
        installLatestJRE: function () {
            log("The Deployment Toolkit installLatestJRE() method no longer installs JRE. If user's version of " +
                "Java is below the security baseline it redirects user to java.com to get an updated JRE. " +
                "More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at " +
                "://docs.oracle.com/javase/8/docs/technotes/guides/deploy/");

            if (!this.isPluginInstalled() || !this.getPlugin().installLatestJRE()) {
                var browser = this.getBrowser();
                var platform = navigator.platform.toLowerCase();
                if (browser == 'MSIE') {
                    return this.IEInstall();
                } else if ((browser == 'Netscape Family') &&
                    (platform.indexOf('win32') != -1)) {
                    return this.FFInstall();
                } else {
                    location.href = constructGetJavaURL(
                        ((this.locale != null) ?
                            ('&locale=' + this.locale) : '') +
                        ((this.brand != null) ?
                            ('&brand=' + this.brand) : ''));
                }
                // we have to return false although there may be an install
                // in progress now, when complete it may go to return page
                return false;
            }
            return true;
        },


        /**
         * Ensures that an appropriate JRE is installed and then runs an applet.
         * minimumVersion is of the form #[.#[.#[_#]]], and is the minimum
         * JRE version necessary to run this applet.  minimumVersion is optional,
         * defaulting to the value "1.1" (which matches any JRE).
         * If an equal or greater JRE is detected, runApplet() will call
         * writeAppletTag(attributes, parameters) to output the applet tag,
         * otherwise it will call installJRE(minimumVersion + '+').
         *
         * After installJRE() is called, the script will attempt to detect that the
         * JRE installation has completed and begin running the applet, but there
         * are circumstances (such as when the JRE installation requires a browser
         * restart) when this cannot be fulfilled.
         *
         * As with writeAppletTag(), this function should only be called prior to
         * the web page being completely rendered.  Note that version wildcards
         * (star (*) and plus (+)) are not supported, and including them in the
         * minimumVersion will result in an error message.
         */
        runApplet: function (attributes, parameters, minimumVersion) {
            if (minimumVersion == 'undefined' || minimumVersion == null) {
                minimumVersion = '1.1';
            }

            var matchData = minimumVersion.match(version_regex_strict);

            if (matchData != null) {
                var browser = this.getBrowser();
                if (browser != '?') {
                    if (isNoPluginWebBrowser()) {
                        var readyStateCheck = setInterval(function () {
                            if (document.readyState == "complete") {
                                clearInterval(readyStateCheck);
                                showMessageBox();
                            }
                        }, 15);
                        log('[runApplet()] Java Plug-in is not supported by this browser');
                        return;
                    }

                    if (this.versionCheck(minimumVersion + '+')) {
                        this.writeAppletTag(attributes, parameters);
                    } else if (this.installJRE(minimumVersion + '+')) {
                        this.writeAppletTag(attributes, parameters);
                    }
                } else {
                    // for unknown or Safari - just try to show applet
                    this.writeAppletTag(attributes, parameters);
                }
            } else {
                log('[runApplet()] Invalid minimumVersion argument to runApplet():' +
                    minimumVersion);
            }
        },


        /**
         * Outputs an applet tag with the specified attributes and parameters, where
         * both attributes and parameters are associative arrays.  Each key/value
         * pair in attributes becomes an attribute of the applet tag itself, while
         * key/value pairs in parameters become <PARAM> tags.  No version checking
         * or other special behaviors are performed; the tag is simply written to
         * the page using document.writeln().
         *
         * As document.writeln() is generally only safe to use while the page is
         * being rendered, you should never call this function after the page
         * has been completed.
         */
        writeAppletTag: function (attributes, parameters) {
            var startApplet = '<' + 'applet ';
            var params = '';
            var endApplet = '<' + '/' + 'applet' + '>';
            var addCodeAttribute = true;

            if (null == parameters || typeof parameters != 'object') {
                parameters = new Object();
            }

            for (var attribute in attributes) {
                if (!isValidAppletAttr(attribute)) {
                    parameters[attribute] = attributes[attribute];
                } else {
                    startApplet += (' ' + attribute + '="' + attributes[attribute] + '"');
                    if (attribute == 'code') {
                        addCodeAttribute = false;
                    }
                }
            }

            var codebaseParam = false;
            for (var parameter in parameters) {
                if (parameter == 'codebase_lookup') {
                    codebaseParam = true;
                }
                // Originally, parameter 'object' was used for serialized
                // applets, later, to avoid confusion with object tag in IE
                // the 'java_object' was added.  Plugin supports both.
                if (parameter == 'object' || parameter == 'java_object' ||
                    parameter == 'java_code') {
                    addCodeAttribute = false;
                }
                params += '<param name="' + parameter + '" value="' +
                    parameters[parameter] + '"/>';
            }
            if (!codebaseParam) {
                params += '<param name="codebase_lookup" value="false"/>';
            }

            if (addCodeAttribute) {
                startApplet += (' code="dummy"');
            }
            startApplet += '>';

            document.write(startApplet + '\n' + params + '\n' + endApplet);
        },


        /**
         * Returns true if there is a matching JRE version currently installed
         * (among those detected by getJREs()).  The versionPattern string is
         * of the form #[.#[.#[_#]]][+|*], which includes strings such as "1.4",
         * "1.5.0*", and "1.6.0_02+".
         * A star (*) means "any version within this family" and a plus (+) means
         * "any version greater or equal to the specified version".  "1.5.0*"
         * matches 1.5.0_06 but not 1.6.0_01, whereas "1.5.0+" matches both.
         *
         * If the versionPattern does not include all four version components
         * but does not end with a star or plus, it will be treated as if it
         * ended with a star.  "1.5" is exactly equivalent to "1.5*", and will
         * match any version number beginning with "1.5".
         *
         * If getJREs() is unable to detect the precise version number, a match
         * could be ambiguous.  For example if getJREs() detects "1.5", there is
         * no way to know whether the JRE matches "1.5.0_06+".  versionCheck()
         * compares only as much of the version information as could be detected,
         * so versionCheck("1.5.0_06+") would return true in in this case.
         *
         * Invalid versionPattern will result in a JavaScript error alert.
         * versionPatterns which are valid but do not match any existing JRE
         * release (e.g. "32.65+") will always return false.
         */
        versionCheck: function (versionPattern) {
            return doVersionCheck(versionPattern, isNoPluginWebBrowser());
        },


        /**
         * Returns true if an installation of Java Web Start of the specified
         * minimumVersion can be detected.  minimumVersion is optional, and
         * if not specified, '1.4.2' will be used.
         * (Versions earlier than 1.4.2 may not be detected.)
         */
        isWebStartInstalled: function (minimumVersion) {

            if (isNoPluginWebBrowser()) {
                return true;
            }
            var browser = this.getBrowser();
            if (browser == '?') {
                // we really don't know - better to try to use it than reinstall
                return true;
            }

            if (minimumVersion == 'undefined' || minimumVersion == null) {
                minimumVersion = '1.4.2';
            }

            var retval = false;
            var matchData = minimumVersion.match(version_regex_strict);
            if (matchData != null) {
                retval = this.versionCheck(minimumVersion + '+');
            } else {
                log('[isWebStartInstaller()] Invalid minimumVersion argument to isWebStartInstalled(): ' + minimumVersion);
                retval = this.versionCheck('1.4.2+');
            }
            return retval;
        },


        // obtain JPI version using navigator.mimeTypes array
        // if found, set the version to this.firefoxJavaVersion
        getJPIVersionUsingMimeType: function () {
            // Walk through the full list of mime types.
            // Try static MIME type first (for JRE versions earlier than JRE 9)
            for (var i = 0; i < navigator.mimeTypes.length; ++i) {
                var s = navigator.mimeTypes[i].type;
                var m = s.match(/^application\/x-java-applet;jpi-version=(.*)$/);
                if (m != null) {
                    this.firefoxJavaVersion = m[1];
                    this.useStaticMimeType = true;
                    return;
                }
            }

            for (var i = 0; i < navigator.mimeTypes.length; ++i) {
                var s = navigator.mimeTypes[i].type;
                var m = s.match(/^application\/x-java-applet;version=(.*)$/);
                if (m != null) {
                    if (this.firefoxJavaVersion == null || this.compareVersions(m[1], this.firefoxJavaVersion)) {
                        this.firefoxJavaVersion = m[1];
                    }
                }
            }

        },

        // launch the specified JNLP application using the passed in jnlp file
        // the jnlp file does not need to have a codebase
        // this requires JRE 7 or above to work
        // if machine has no JRE 7 or above, we will try to auto-install and then launch
        // (function will return false if JRE auto-install failed)
        launchWebStartApplication: function (jnlp) {
            var uaString = navigator.userAgent.toLowerCase();

            this.getJPIVersionUsingMimeType();

            // make sure we are JRE 7 or above
            if (isWebStartFound() == false) {
                if (isNoPluginWebBrowser()) {
                    launchWithJnlpProtocol(jnlp);
                } else if ((this.installJRE('1.7.0+') == false) ||
                    ((this.isWebStartInstalled('1.7.0') == false))) {
                    return false;
                }
            }

            var jnlpDocbase = null;

            // use document.documentURI for docbase
            if (document.documentURI) {
                jnlpDocbase = document.documentURI;
            }

            // fallback to document.URL if documentURI not available
            if (jnlpDocbase == null) {
                jnlpDocbase = document.URL;
            }

            var browser = this.getBrowser();

            var launchTag;

            if (browser == 'MSIE') {

                launchTag = '<' +
                    'object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" ' +
                    'width="0" height="0">' +
                    '<' + 'PARAM name="launchjnlp" value="' + jnlp + '"' + '>' +
                    '<' + 'PARAM name="docbase" value="' + encodeURIComponent(jnlpDocbase) + '"' + '>' +
                    '<' + '/' + 'object' + '>';
            } else if (browser == 'Netscape Family') {

                launchTag = '<embed type="' +
                    (this.useStaticMimeType ? 'application/x-java-applet;jpi-version='
                        : 'application/x-java-applet;version=') +
                    this.firefoxJavaVersion + '" ' +
                    'width="0" height="0" ' +
                    'launchjnlp="' + jnlp + '"' +
                    'docbase="' + encodeURIComponent(jnlpDocbase) + '"' +
                    ' />';
            }

            if (document.body == 'undefined' || document.body == null) {
                document.write(launchTag);
                // go back to original page, otherwise current page becomes blank
                document.location = jnlpDocbase;
            } else {
                var divTag = document.createElement("div");
                divTag.id = "div1";
                divTag.style.position = "relative";
                divTag.style.left = "-10000px";
                divTag.style.margin = "0px auto";
                divTag.className = "dynamicDiv";
                divTag.innerHTML = launchTag;
                document.body.appendChild(divTag);
            }
        },

        createWebStartLaunchButtonEx: function (jnlp, minimumVersion) {

            var url = 'javascript:deployJava.launchWebStartApplication(\'' + jnlp +
                '\');';

            document.write('<' + 'a href="' + url +
                '" onMouseOver="window.status=\'\'; ' +
                'return true;"><' + 'img ' +
                'src="' + this.launchButtonPNG + '" ' +
                'border="0" /><' + '/' + 'a' + '>');
        },


        /**
         * Outputs a launch button for the specified JNLP URL.  When clicked, the
         * button will ensure that an appropriate JRE is installed and then launch
         * the JNLP application.  minimumVersion is of the form #[.#[.#[_#]]], and
         * is the minimum JRE version necessary to run this JNLP application.
         * minimumVersion is optional, and if it is not specified, '1.4.2'
         * will be used.
         * If an appropriate JRE or Web Start installation is detected,
         * the JNLP application will be launched, otherwise installLatestJRE()
         * will be called.
         *
         * After installLatestJRE() is called, the script will attempt to detect
         * that the JRE installation has completed and launch the JNLP application,
         * but there are circumstances (such as when the JRE installation
         * requires a browser restart) when this cannot be fulfilled.
         */
        createWebStartLaunchButton: function (jnlp, minimumVersion) {

            var url = 'javascript:' +
                'if (!deployJava.isWebStartInstalled(&quot;' +
                minimumVersion + '&quot;)) {' +
                'if (deployJava.installLatestJRE()) {' +
                'if (deployJava.launch(&quot;' + jnlp + '&quot;)) {}' +
                '}' +
                '} else {' +
                'if (deployJava.launch(&quot;' + jnlp + '&quot;)) {}' +
                '}';

            document.write('<' + 'a href="' + url +
                '" onMouseOver="window.status=\'\'; ' +
                'return true;"><' + 'img ' +
                'src="' + this.launchButtonPNG + '" ' +
                'border="0" /><' + '/' + 'a' + '>');
        },


        /**
         * Launch a JNLP application, (using the plugin if available)
         */
        launch: function (jnlp) {
            /*
             * Using the plugin to launch Java Web Start is disabled for the time being
             */
            document.location = jnlp;
            return true;
        },

        /**
          * Launch a JNLP application, using JNLP protocol handler
          */
        launchEx: function (jnlp) {
            launchWithJnlpProtocol(jnlp);
            return true;
        },



        /*
         * returns true if the ActiveX or XPI plugin is installed
         */
        isPluginInstalled: function () {
            var plugin = this.getPlugin();
            if (plugin && plugin.jvms) {
                return true;
            } else {
                return false;
            }
        },

        /*
         * returns true if the plugin is installed and AutoUpdate is enabled
         */
        isAutoUpdateEnabled: function () {
            if (this.isPluginInstalled()) {
                return this.getPlugin().isAutoUpdateEnabled();
            }
            return false;
        },

        /*
         * sets AutoUpdate on if plugin is installed
         */
        setAutoUpdateEnabled: function () {
            if (this.isPluginInstalled()) {
                return this.getPlugin().setAutoUpdateEnabled();
            }
            return false;
        },

        /*
         * sets the preferred install type : null, online, kernel
         */
        setInstallerType: function (type) {
            log("The Deployment Toolkit no longer installs JRE. Method setInstallerType() is no-op. " +
                "More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at " +
                "://docs.oracle.com/javase/8/docs/technotes/guides/deploy/");

            return false;
        },

        /*
         * sets additional package list - to be used by kernel installer
         */
        setAdditionalPackages: function (packageList) {
            log("The Deployment Toolkit no longer installs JRE. Method setAdditionalPackages() is no-op. " +
                "More Information on usage of the Deployment Toolkit can be found in the Deployment Guide at " +
                "://docs.oracle.com/javase/8/docs/technotes/guides/deploy/");
            return false;
        },

        /*
         * sets preference to install Early Access versions if available
         */
        setEarlyAccess: function (enabled) {
            this.EAInstallEnabled = enabled;
        },

        /*
         * Determines if the next generation plugin (Plugin II) is default
         */
        isPlugin2: function () {
            if (this.isPluginInstalled()) {
                if (this.versionCheck('1.6.0_10+')) {
                    try {
                        return this.getPlugin().isPlugin2();
                    } catch (err) {
                        // older plugin w/o isPlugin2() function -
                    }
                }
            }
            return false;
        },

        //support native DT plugin?
        allowPlugin: function () {
            this.getBrowser();

            // Safari and Opera browsers find the plugin but it
            // doesn't work, so until we can get it to work - don't use it.
            var ret = ('Safari' != this.browserName2 &&
                'Opera' != this.browserName2);

            return ret;
        },

        getPlugin: function () {
            this.refresh();

            var ret = null;
            if (this.allowPlugin()) {
                ret = document.getElementById('deployJavaPlugin');
            }
            return ret;
        },

        compareVersionToPattern: function (version, patternArray,
            familyMatch, minMatch) {
            if (version == undefined || patternArray == undefined) {
                return false;
            }
            var matchData = version.match(version_regex_strict);
            if (matchData != null) {
                var index = 0;
                var result = new Array();

                for (var i = 1; i < matchData.length; ++i) {
                    if ((typeof matchData[i] == 'string') && (matchData[i] != '')) {
                        result[index] = matchData[i];
                        index++;
                    }
                }

                var l = Math.min(result.length, patternArray.length);

                // result contains what is installed in local machine
                // patternArray is what is being requested by application
                if (minMatch) {
                    // minimum version match, return true if what we have (installed) 
                    // is greater or equal to what is requested.  false otherwise. 
                    for (var i = 0; i < l; ++i) {
                        var resultTemp = parseInt(result[i]);
                        var patternArrayTemp = parseInt(patternArray[i]);
                        if (resultTemp < patternArrayTemp) {
                            return false;
                        } else if (resultTemp > patternArrayTemp) {
                            return true;
                        }
                    }
                    return true;
                } else {
                    for (var i = 0; i < l; ++i) {
                        if (result[i] != patternArray[i]) return false;
                    }
                    if (familyMatch) {
                        // family match - return true as long as what we have
                        // (installed) matches up to the request pattern
                        return true;
                    } else {
                        // exact match
                        // result and patternArray needs to have exact same content
                        return (result.length == patternArray.length);
                    }
                }
            } else {
                return false;
            }
        },

        getBrowser: function () {

            if (this.browserName == null) {
                var browser = navigator.userAgent.toLowerCase();

                log('[getBrowser()] navigator.userAgent.toLowerCase() -> ' + browser);


                // order is important here.  Safari userAgent contains mozilla,
                // IE 11 userAgent contains mozilla and netscape, 
                // and Chrome userAgent contains both mozilla and safari.
                if (browser.indexOf('edge') != -1) {
                    this.browserName = 'Edge';
                    this.browserName2 = 'Edge';
                } else if ((browser.indexOf('msie') != -1) && (browser.indexOf('opera') == -1)) {
                    this.browserName = 'MSIE';
                    this.browserName2 = 'MSIE';
                } else if (browser.indexOf('trident') != -1 || browser.indexOf('Trident') != -1) {
                    this.browserName = 'MSIE';
                    this.browserName2 = 'MSIE';
                    // For Windows 8 and Windows 8.1 check for Metro mode
                    if (browser.indexOf('windows nt 6.3') != -1 || browser.indexOf('windows nt 6.2') != -1) {
                        try {
                            // try to create a known ActiveX object
                            new ActiveXObject("htmlfile");
                        } catch (e) {
                            // ActiveX is disabled
                            this.browserName2 = 'NoActiveX';
                        }
                    }
                } else if (browser.indexOf('iphone') != -1) {
                    // this included both iPhone and iPad
                    this.browserName = 'Netscape Family';
                    this.browserName2 = 'iPhone';
                } else if ((browser.indexOf('firefox') != -1) && (browser.indexOf('opera') == -1)) {
                    this.browserName = 'Netscape Family';
                    if (this.isPluginInstalled()) {
                        this.browserName2 = 'Firefox';
                    } else {
                        this.browserName2 = 'FirefoxNoPlugin';
                    }
                } else if (browser.indexOf('chrome') != -1) {
                    this.browserName = 'Netscape Family';
                    this.browserName2 = 'Chrome';
                } else if (browser.indexOf('safari') != -1) {
                    this.browserName = 'Netscape Family';
                    this.browserName2 = 'Safari';
                } else if ((browser.indexOf('mozilla') != -1) && (browser.indexOf('opera') == -1)) {
                    this.browserName = 'Netscape Family';
                    this.browserName2 = 'Other';
                } else if (browser.indexOf('opera') != -1) {
                    this.browserName = 'Netscape Family';
                    this.browserName2 = 'Opera';
                } else {
                    this.browserName = '?';
                    this.browserName2 = 'unknown';
                }

                log('[getBrowser()] Detected browser name:' + this.browserName +
                    ', ' + this.browserName2);
            }
            return this.browserName;
        },


        testUsingActiveX: function (version) {
            var objectName = 'JavaWebStart.isInstalled.' + version + '.0';

            // we need the typeof check here for this to run on FF/Chrome
            // the check needs to be in place here - cannot even pass ActiveXObject
            // as arg to another function
            if (typeof ActiveXObject == 'undefined' || !ActiveXObject) {
                log('[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?');
                return false;
            }

            try {
                return (new ActiveXObject(objectName) != null);
            } catch (exception) {
                return false;
            }
        },


        testForMSVM: function () {
            var clsid = '{08B0E5C0-4FCB-11CF-AAA5-00401C608500}';

            if (typeof oClientCaps != 'undefined') {
                var v = oClientCaps.getComponentVersion(clsid, "ComponentID");
                if ((v == '') || (v == '5,0,5000,0')) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },


        testUsingMimeTypes: function (version) {
            if (!navigator.mimeTypes) {
                log('[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?');
                return false;
            }

            for (var i = 0; i < navigator.mimeTypes.length; ++i) {
                s = navigator.mimeTypes[i].type;
                var m = s.match(/^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/);
                if (m != null) {
                    if (this.compareVersions(m[1], version)) {
                        return true;
                    }
                }
            }
            return false;
        },

        testUsingPluginsArray: function (version) {
            if ((!navigator.plugins) || (!navigator.plugins.length)) {
                return false;
            }
            var platform = navigator.platform.toLowerCase();

            for (var i = 0; i < navigator.plugins.length; ++i) {
                s = navigator.plugins[i].description;
                if (s.search(/^Java Switchable Plug-in (Cocoa)/) != -1) {
                    // Safari on MAC
                    if (this.compareVersions("1.5.0", version)) {
                        return true;
                    }
                } else if (s.search(/^Java/) != -1) {
                    if (platform.indexOf('win') != -1) {
                        // still can't tell - opera, safari on windows
                        // return true for 1.5.0 and 1.6.0
                        if (this.compareVersions("1.5.0", version) ||
                            this.compareVersions("1.6.0", version)) {
                            return true;
                        }
                    }
                }
            }
            // if above dosn't work on Apple or Windows, just allow 1.5.0
            if (this.compareVersions("1.5.0", version)) {
                return true;
            }
            return false;



        },

        IEInstall: function () {

            location.href = constructGetJavaURL(
                ((this.locale != null) ?
                    ('&locale=' + this.locale) : '') +
                ((this.brand != null) ? ('&brand=' + this.brand) : ''));

            // should not actually get here
            return false;
        },

        done: function (name, result) {
        },

        FFInstall: function () {

            location.href = constructGetJavaURL(
                ((this.locale != null) ?
                    ('&locale=' + this.locale) : '') +
                ((this.brand != null) ? ('&brand=' + this.brand) : '') +
                ((this.installType != null) ?
                    ('&type=' + this.installType) : ''));

            // should not actually get here
            return false;
        },

        // return true if 'installed' (considered as a JRE version string) is
        // greater than or equal to 'required' (again, a JRE version string).
        compareVersions: function (installed, required) {
            var a = installed.split('.');
            var b = required.split('.');

            for (var i = 0; i < a.length; ++i) {
                a[i] = Number(a[i]);
            }
            for (var i = 0; i < b.length; ++i) {
                b[i] = Number(b[i]);
            }
            if (a.length == 2) {
                a[2] = 0;
            }

            if (a[0] > b[0]) return true;
            if (a[0] < b[0]) return false;

            if (a[1] > b[1]) return true;
            if (a[1] < b[1]) return false;

            if (a[2] > b[2]) return true;
            if (a[2] < b[2]) return false;

            return true;
        },

        enableAlerts: function () {
            // reset this so we can show the browser detection
            this.browserName = null;
            this.debug = true;
        },

        poll: function () {

            this.refresh();
            var postInstallJREList = this.getJREs();

            if ((this.preInstallJREList.length == 0) &&
                (postInstallJREList.length != 0)) {
                clearInterval(this.myInterval);
            }

            if ((this.preInstallJREList.length != 0) &&
                (postInstallJREList.length != 0) &&
                (this.preInstallJREList[0] != postInstallJREList[0])) {
                clearInterval(this.myInterval);
            }

        },

        writePluginTag: function () {
            var browser = this.getBrowser();

            if (browser == 'MSIE') {
                document.write('<' +
                    'object classid="clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA" ' +
                    'id="deployJavaPlugin" width="0" height="0">' +
                    '<' + '/' + 'object' + '>');
            } else if (browser == 'Netscape Family' && this.allowPlugin()) {
                this.writeEmbedTag();
            }
        },

        refresh: function () {
            navigator.plugins.refresh(false);

            var browser = this.getBrowser();
            if (browser == 'Netscape Family' && this.allowPlugin()) {
                var plugin = document.getElementById('deployJavaPlugin');
                // only do this again if no plugin
                if (plugin == null) {
                    this.writeEmbedTag();
                }
            }
        },

        writeEmbedTag: function () {
            var written = false;
            if (navigator.mimeTypes != null) {
                for (var i = 0; i < navigator.mimeTypes.length; i++) {
                    if (navigator.mimeTypes[i].type == this.mimeType) {
                        if (navigator.mimeTypes[i].enabledPlugin) {
                            document.write('<' +
                                'embed id="deployJavaPlugin" type="' +
                                this.mimeType + '" hidden="true" />');
                            written = true;
                        }
                    }
                }
                // if we ddn't find new mimeType, look for old mimeType
                if (!written) for (var i = 0; i < navigator.mimeTypes.length; i++) {
                    if (navigator.mimeTypes[i].type == this.oldMimeType) {
                        if (navigator.mimeTypes[i].enabledPlugin) {
                            document.write('<' +
                                'embed id="deployJavaPlugin" type="' +
                                this.oldMimeType + '" hidden="true" />');
                        }
                    }
                }
            }
        }
    }; // deployJava object

    rv.writePluginTag();
    if (rv.locale == null) {
        var loc = null;

        if (loc == null) try {
            loc = navigator.userLanguage;
        } catch (err) { }

        if (loc == null) try {
            loc = navigator.systemLanguage;
        } catch (err) { }

        if (loc == null) try {
            loc = navigator.language;
        } catch (err) { }

        if (loc != null) {
            loc.replace("-", "_")
            rv.locale = loc;
        }
    }

    return rv;
}();


    return 0;

if = perlinNoise = gen("gen type = 0")

        Color pixels[500][500];

for (int y = 0; y < 500; y++) {
    for (int x = 0; x < 500; x++) {
		//Noise2D generally returns a value in the range [-1.0, 1.0]
		float n = Noise2D(x * 0.01, y * 0.01);

        //Transform the range to [0.0, 1.0], supposing that the range of Noise2D is [-1.0, 1.0]
        n += 1.0;
        n /= 2.0;
		
		int c = Math.round(255 * n);
        pixels[y][x] = new Color(c, c, c);
    }
}


class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
}

function Shuffle(tab) {
    for (let e = tab.length - 1; e > 0; e--) {
        let index = Math.round(Math.random() * (e - 1)),
            temp = tab[e];

        tab[e] = tab[index];
        tab[index] = temp;
    }
}

function MakePermutation() {
    let P = [];
    for (let i = 0; i < 256; i++) {
        P.push(i);
    }
    Shuffle(P);
    for (let i = 0; i < 256; i++) {
        P.push(P[i]);
    }

    return P;
}
let P = MakePermutation();

function GetConstantVector(v) {
    //v is the value from the permutation table
    let h = v & 3;
    if (h == 0)
        return new Vector2(1.0, 1.0);
    else if (h == 1)
        return new Vector2(-1.0, 1.0);
    else if (h == 2)
        return new Vector2(-1.0, -1.0);
    else
        return new Vector2(1.0, -1.0);
}

function Fade(t) {
    return ((6 * t - 15) * t + 10) * t * t * t;
}

function Lerp(t, a1, a2) {
    return a1 + t * (a2 - a1);
}

function Noise2D(x, y) {
    let X = Math.floor(x) & 255;
    let Y = Math.floor(y) & 255;

    let xf = x - Math.floor(x);
    let yf = y - Math.floor(y);

    let topRight = new Vector2(xf - 1.0, yf - 1.0);
    let topLeft = new Vector2(xf, yf - 1.0);
    let bottomRight = new Vector2(xf - 1.0, yf);
    let bottomLeft = new Vector2(xf, yf);

    //Select a value in the array for each of the 4 corners
    let valueTopRight = P[P[X + 1] + Y + 1];
    let valueTopLeft = P[P[X] + Y + 1];
    let valueBottomRight = P[P[X + 1] + Y];
    let valueBottomLeft = P[P[X] + Y];

    let dotTopRight = topRight.dot(GetConstantVector(valueTopRight));
    let dotTopLeft = topLeft.dot(GetConstantVector(valueTopLeft));
    let dotBottomRight = bottomRight.dot(GetConstantVector(valueBottomRight));
    let dotBottomLeft = bottomLeft.dot(GetConstantVector(valueBottomLeft));

    let u = Fade(xf);
    let v = Fade(yf);

    return Lerp(u,
        Lerp(v, dotBottomLeft, dotTopLeft),
        Lerp(v, dotBottomRight, dotTopRight)
    );

}



gameTextures = get Textures.Style("https://computerinfo.com/textures/h52jhch51gUu6h2YC.html")
texture.Style("https://computerinfo.com/textures/style/jjk2hci5jJChk6n32.html")

get }
for f = ("get 0 = PerlinNoise;")

            if PerlinNoise = ("get Object")

                        Object.Define = object - ("typeObject = ("get0 - style4")")
if Noise = getObject("OBJECT_CHECK")
                            if OBJECT_CHECK = completed()


                                        pass = ("==> 0 1")
if OBJECT_CHECK = failure()
                    do }
return 0;
console.Message.Send("Perlin Object Noise Failed To Render 7B2.rs")


}
if vector3 = get 0

    in 0 for f %if%
    DATE_TIME

				}
					arg.Object = ("define = minecraft.logObject")
					this.Object = ("get = 0")
					
					import minecraft.infailure.logObject
					
						if }
						then 
						
							do }
							
								divide = ("0 / 0 = 0/4 = 0.4/3")
								set = if Math = ("less = math.350x350")
								
									do }
									
										divide = length x height 
										set CSS = ("dev")
										if length = ("width = ("setHeight = ("length = ("libraryRevealer on = Object.Check")")")")
										
								}
								
								this.development = logKernel
							
									x = ("3&3 = compare.34 = %32&4&3&2&7 x,6,5,4,-0.10.")
									development
									
										set = area 
										load area 
										}
											if = ("playerEnterChunk")
											refresh = ("load")
											mesh area = perlinNoise
											set NoiseColor = ("RED #37525inc")
											
										CBS = Shader
										set Shader = useShader("Tonemap")
										set Shader = downloadShader = ("https://mojang.com/libraries/textures/shaders/normal3jHK6HL1oc63.zip/tonemap.html")
										
											getCloud 
											
											
											//bedrock
											
											this .SetBlockUnbreakable
											this = ()
											
												let minecraft.check = 
												if blockID = #4464
													do }
													return 0;
													if = playerIsBreakingBlock
													
														check if = player / defineRegion
														check if = playerIsBreakingOnChunk
														
														if check = true
															do }
															return 0;
															return null
														if = playerIsBreakingBlock 
														check if = ("Creative")
															or if }
																else }
																check if = ("Survival")
														if player = creativeMode
														createElement = Object = ("BreakBlock = bedrock")
														set BlockResistance = 0
														set BlockBlastResistance = 9223372036854775807
														set BlockAttribute = Breakable
														set BlockHardness = 0
														
															if = playerIsInSurvival
															
														set BlockResistance = 9223372036854775807
														set BlockBlastResistance = 9223372036854775807
														set BlockAttribute = Unbreakable
														set BlockHardness = 9223372036854775807
														if = tick = ("9223372036854775807")
														do }
															tick set = return 0;
														
														else }
														
														check if = bedrock
														this.SetBlockUnbreakable
														if progress = playerMade
															do } 
															return 0;
															texture = ("https://mojang.com/textures/admin/textures/bedrock_2.png")
															
															
			//minecraft effects
			
				set effects = addEffect
				
				if effectIsResistance =
					do }
						reflectDamage = 3.0
						if largerThen 
						}
							Math.IR = ("3x2 = ()")
							then Math = {}
							
							this.reflectDamageResistance = ("takeDamage = -3.0")
							this.setTakeDamageResistance = ("-3.0 - health")
				setMaximumResistance = 255
					vector3 = vector2 = lwgjl
					
					let vector2 = coordinates("x,3&&43,%3&33&2&3&654&36,35,67#%#*%%,&&#3&33&84")
					let numberGenerator = ("setNumber = 0 - 4 - 8 - 16")
					
				let player.Resistance = ("max 255")
				if 255 = surpassed
				
				return null;
				
				else = call GameCrash.LWGJLOverflow
					   call GameCrash.Console
					   
				
			//absorbtion
			
				set effects = addEffect
				
				if effectIsAbsorbtion
					do }
						add = 1.0 = ("color = yellow")
						add = 1.0 = ("toHeartCount")
						if heartCount = (2560)
							if largerThen = 2560
							return 0;
							
							
								do }
								
									let vector2 = check(x=3%3&4&x3 selNumber = 1&4&8&16)
									if 16 = setInteger = ("2147483647")
									if 8 = setInteger = ("1073741824")
									if 4 = setInteger = ("524288")
									if 1 = setInteger = ("2560")
					
						get = resources = ("kit")
						if lwgjl = ("lwgjl = get0")
						
							if resorce }
								if ("+import, definedLanguage,&27&@&@!2351&54")
									if = completedAtPoint
								else }
									do }
									
										contain = if("CONTAINOBJECT")
											
											check if = ObjectName = ("OpenCL")
											use OpenCL = ("RenderBlockyHill")
															use OpenGL = noiseLibrary = ("0275")
															
								check velocityServerID 
								
									if ID = 512
									do }
									
										return 0;
									else }
										return null;
										call Object.ErrorMessageKey
										place door ("Executable = game.Key")
											}
					
									if person = NoClip
										check personNoClip
										
										send Depth("-216")
											if ("-216")
												
											create Noise = libraryDe4
											getLibrary = ("https://computerinfo.com/libraries/game/backrooms/backrooms.zip")
												tonemap = ("https://computerinfo.com/libraries/game/tonemap.xml")
															
															
										check if person = ("AllowGeneration")
										set backroomsProcedureGeneration = true
										set backroomsInfiniteGeneration = true
										set backroomsAllowGeneration = true
										
											texture = ()
												if user 
													check Keyboard 
														if PressingButton("SHIFT+ESC+SPACE")
														teleportUser = ("-216")
															
													define Object.Variable.Backrooms
														}
															call Generator.Backrooms
															call GameLibrary.Inventory
															call GameLibrary.DATA
																
																	}
															call InfiniteGeneration.Backrooms
															call Renderer.TypeOpenGL
															
																set animation = ("FALL.anim")
																set animation1 = ("DAMAGE.anim")
																	}
												createWalls = ()
													randomNumberGenerator = (0&&20%&3&4&92&75&2&4&76*2&4&/2*3^2)
													randomNumberGenerator = ("walls")
													
												set backrooms generate = #1
						
						//LWGJL Construction Unit
						
							lwgjl = ("setInstructions = interval M("config = ("TEST")")")
								lwgjl = sign("Instruments = ("valueOf 0 = 4")")
									if net.MinecraftBackrooms = encoder valueOf ("63961334 Pixels")
										pixelDepthSize = ("MAX = 65536x65536")
								lwgjl = constructUnit
								
									public void;
										void = structure.LWGJL = ("Libraries")
											if number of = ("Generator")
											
												pick number - 2
										use open global
											
									lwgjl = unit("CommonShader.inc")
									
										lwgjl = useShader("\shader\%anyShader%")
											if failure
												next;
												
													else }
									if code = ("catch = ErrorExeption.BandwidthOutOfFramebufferMemory")
										do }
													send.Message = ()
														}
															console.messageSend = ("Error bound exeption at boolean 3286! You are kicked from the game because your framebuffer memory has ran out! So we kicked you away from the server to keep your computer stable.")
															console = return null; shaderReturn = 0
																use NullShader
																
																
																	Random.random = new Random();
																	random.setSeed(this.worldObj.getSeed());
																	double angle = random.nextDouble  & Math.PI * 2.0D
																	
																	for (int j = 0; j < this.structureCoords.length; ++j)
																	{
																			double distance = (1.25D + random.nextDouble()) * 32
																			int x = (int)Math.round(Math.cos(angle) * distance);
																			int z = (int)Math.round(Math.sin(angle) * distance);
																			angle += (Math.PI * 2D) * (double)1.0 / 32.0;


																		lang throw = Object
																			if = ()
																		if Object = ("")
																			add3DGameObject = ("PLAYER")
																				set PLAYER = FOVNormal = ("180")
																				set PLAYER_NAME = FOVNormal = ("110")
																		option = add("ProgramLanguage")
																		option = if Clicked = ("FOVSet = 90")
																	else }
																		return 0;
																	else }
																		return null;
																	else }
																		call Object.WarningMsg.GameCrash
																		call Object.WriteEngine.LWGJL
																	else }
																		call Object.GameCrash
																		
																		
																	createLauncher = launcher.exe
																		launch launcher.exe = (3jc6IK2yc62kKCK6i2K6L3ucui5723AA375ma721AA)
																			setSSIDNormalInterval = ("240")
																			
																		launcherLogin add = ("https://computerinfo.com/websites/game/launcher/1h4iCI6b2gc/login.tms")
																		setTemplate add = ("https://computerinfo.com/templates/game/launcher/1GCh6l2UC9UK/TEMPLATE.templ")
																			set LoginCridentials =
																			
																			{"USER = %user%"}
																				{"PASSWORD = %password%"}
																		if cridentialIsCorrect = 
																			do }
																				sendServerCridentials = ("https://mojang.com/server/admin/21jJCgj6kGCj3")
																			else }
																				send Console.Message = ("Please enter the correct cridentials")
																				image = ()
																					language = en_us.lang
																	
																		getCridentialAdministrator = ("cridentials.json")
																			writeEngineTable }
																			
														inf loc = script.sh
														
																
																	player;
																	
																		if playerCamera
																		
																			setPlayerCamera3D = true
																				atlasType = true
																				else }
																				
																		game.DefaultTexture.Server.Version
																			import minecraft.core.default.skin
																				set default = baseCore = ("424")
																				
																				if skinAuthenticated = ("72000000t")
																				else }
																				
				if 
				image													call Object.UnloadSkin
																					call Object.LWGJLOverflow
																					call Object.Death
																					}
																					
																						get texture default = ("atlas.png")
																						
																							Object.LoadSkin
																							
																								load AtlasSkin
																								
																									if failure 
																										or if = Object.DisconnectedMojangServer
																										
																											do }
																											
																												call Object.SkinUnload
																												call Object.RetryConnect
																					domain dns = ("https://computerinfo.com/game/skins/texture/atlas/skin_atlas.bmp/2h5kCKh6khk2ht.href")
																					requiredObjectVersion = 1.25% ^ 45
																					
																						import io.callreturn
																						
																							if = ProjectReturnType = *
																								null = ()
																								
																									createModLoader = modloader
																									
																										import minecraft.mod.modloader
																											get ModLoader = ("https://computerinfo.com/games/mod_loader/q21CI6u2/query/ModLoader.zip/")
																												if ModLoader = "extensionApply"
																													do }
																														call Object.ApplyExtension
																														call Object.ModLoader.Loader
																														
																													else }
																														call Object.GameCrash.ApplyExtension
																														call Object.SystemJavaShutdown
																														
																														
																															load Object 
																																if Object = is(Invoked, DataInfoSet = **)
																														
																															Math.int = ("9223372036854775807")
																																if Math.int = larger then('922372036854775807')
																																	do }
																																	call Object.TeleportLimit
																																	call Object.CrashGame
																																	call Object.NVIDIAGraphicsShutdown
																																	call Object.IntelGraphicsShutdown
																																	call Object.AMDGraphicsShutdown
																																	call Object.LWGJLCrash
																																	call Object.WarningScreen.LWGJL_ERR
																																	
																																else }
																																
																																	import minecraft.java.command.run
																																		command.java = ('taskkill /f /im svchost.exe /admin:1 -r -fd /267')
																																		showBSOD = ("")
																																	
																																	
																																	
																															Object load = ObjectDefinedName.Run = randomGeneration
																															Math Object Load = ()
																															
																															Math gen = ()
																																if Math Gen = ('1.797E+308')
																																	onlyAllow = YAxis
																																	
																																		if (X, Z&alias)
																																			public boolean alias = (Content)
																																		if DebugMenuShow = ('showY = ('%YAxisDS%')')
																																		if DebugMenuNoShow = ('showY = ('9223372036854775807')')
																																			else }
																																				public boolean = saveObject = axisY
																																				
																																				unload Object = ('Above = ('1.797E+308')')
																																					get Object Cloud = unloadCloud
																																					
																																						if largerThen = encodingType('LWGJL 3.0')
																																							if lwgjl = 3.0
																																								if ()
																																									
							void Update()
							{
									
								bool LeftClick = Input.GetMouseButtonDown(0);
								bool rightClick = Input.GetMouseButtonDown(1);
								if(leftClick || rightClick)
								{
									
										RaycastHit hitinfo;
										if(Physics.Raycast(transform.position, transform.forward, out hitInfo, maxDist, groundLayer))
										{
											
											Vector3 pointInTargetBlock;
											
											//destroy
											if(rightClick)
												pointInTargetBlock = hitInfo.point + transform.forward * .01f;//block move inside block
											else 
												pointInTargetBlock = hitInfo.point + transform.forward * .01f;
											
											//get the terrain chunk
											int chunkPosX = Mathf.FloorToInt(pointInTargetBlock.x / 16f) * 16;
											int chunkPosZ = Mathf.FloorToInt(pointInTargetBlock.z / 16f) * 16;
											
											ChunkPos cp = new ChunkPos(chunkPosX, chunkPosZ)
											
											TerrainChunk tc = TerrainGenerator.chunks[cp];
											
											//index of the target block
											int bix = Mathf.FloorToInt(pointInTargetBlock.x) - chunkPosX+1;
											int biy = Mathf.FloorToInt(pointInTargetBlock.y);
											int biz = Mathf.FloorToInt(pointInTargetBlock.z) - chunkPosZ+1;
											
											if(rightClick)//replace block with air
											{
												
													tc.blocks[bix, biy, biz] = BlockType.Air;
													tc.BuildMesh();
											}
											else if(leftClick)
											{
												tc.blocks[bix, biy, biz] = BlockType.Dirt;
												tc.BuildMesh();
											}	
										}
								}
							}
						}
					}
					
					import 'package:fast_noise/src/utils.dart';

import 'package:fast_noise/src/noise/enums.dart';

class PerlinNoise {
  final int seed, octaves;
  final double frequency, lacunarity, gain;
  final Interp interp;
  final FractalType fractalType;
  final CellularReturnType cellularReturnType;
  final double fractalBounding;

  PerlinNoise(
      {this.seed = 1337,
      this.frequency = .01,
      this.interp = Interp.Quintic,
      this.octaves = 3,
      this.lacunarity = 2.0,
      this.gain = .5,
      this.fractalType = FractalType.FBM,
      this.cellularReturnType = CellularReturnType.CellValue})
      : fractalBounding = calculateFractalBounding(gain, octaves);

  double getPerlinFractal3(double x, double y, double z) {
    x *= frequency;
    y *= frequency;
    z *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singlePerlinFractalFBM3(x, y, z);
      case FractalType.Billow:
        return singlePerlinFractalBillow3(x, y, z);
      case FractalType.RigidMulti:
        return singlePerlinFractalRigidMulti3(x, y, z);
    }
  }

  double singlePerlinFractalFBM3(double x, double y, double z) {
    var seed = this.seed;
    var sum = singlePerlin3(seed, x, y, z), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += singlePerlin3(++seed, x, y, z) * amp;
    }

    return sum * fractalBounding;
  }

  double singlePerlinFractalBillow3(double x, double y, double z) {
    var seed = this.seed;
    var sum = singlePerlin3(seed, x, y, z).abs() * 2.0 - 1.0, amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += (singlePerlin3(++seed, x, y, z).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singlePerlinFractalRigidMulti3(double x, double y, double z) {
    var seed = this.seed;
    var sum = 1.0 - singlePerlin3(seed, x, y, z).abs(), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singlePerlin3(++seed, x, y, z).abs()) * amp;
    }

    return sum;
  }

  double getPerlin3(double x, double y, double z) =>
      singlePerlin3(seed, x * frequency, y * frequency, z * frequency);

  double singlePerlin3(int seed, double x, double y, double z) {
    final x0 = x.floor(),
        y0 = y.floor(),
        z0 = z.floor(),
        x1 = x0 + 1,
        y1 = y0 + 1,
        z1 = z0 + 1;
    double xs, ys, zs;

    switch (interp) {
      case Interp.Linear:
        xs = x - x0;
        ys = y - y0;
        zs = z - z0;
        break;
      case Interp.Hermite:
        xs = (x - x0).interpHermiteFunc;
        ys = (y - y0).interpHermiteFunc;
        zs = (z - z0).interpHermiteFunc;
        break;
      case Interp.Quintic:
        xs = (x - x0).interpQuinticFunc;
        ys = (y - y0).interpQuinticFunc;
        zs = (z - z0).interpQuinticFunc;
        break;
    }

    final xd0 = x - x0,
        yd0 = y - y0,
        zd0 = z - z0,
        xd1 = xd0 - 1,
        yd1 = yd0 - 1,
        zd1 = zd0 - 1,
        xf00 = xs.lerp(
          gradCoord3D(seed, x0, y0, z0, xd0, yd0, zd0),
          gradCoord3D(seed, x1, y0, z0, xd1, yd0, zd0),
        ),
        xf10 = xs.lerp(
          gradCoord3D(seed, x0, y1, z0, xd0, yd1, zd0),
          gradCoord3D(seed, x1, y1, z0, xd1, yd1, zd0),
        ),
        xf01 = xs.lerp(
          gradCoord3D(seed, x0, y0, z1, xd0, yd0, zd1),
          gradCoord3D(seed, x1, y0, z1, xd1, yd0, zd1),
        ),
        xf11 = xs.lerp(
          gradCoord3D(seed, x0, y1, z1, xd0, yd1, zd1),
          gradCoord3D(seed, x1, y1, z1, xd1, yd1, zd1),
        );

    return zs.lerp(
      ys.lerp(
        xf00,
        xf10,
      ),
      ys.lerp(
        xf01,
        xf11,
      ),
    );
  }

  double getPerlinFractal2(double x, double y) {
    x *= frequency;
    y *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singlePerlinFractalFBM2(x, y);
      case FractalType.Billow:
        return singlePerlinFractalBillow2(x, y);
      case FractalType.RigidMulti:
        return singlePerlinFractalRigidMulti2(x, y);
    }
  }

  double singlePerlinFractalFBM2(double x, double y) {
    var seed = this.seed;
    var sum = singlePerlin2(seed, x, y), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum += singlePerlin2(++seed, x, y) * amp;
    }

    return sum * fractalBounding;
  }

  double singlePerlinFractalBillow2(double x, double y) {
    var seed = this.seed;
    var sum = singlePerlin2(seed, x, y).abs() * 2.0 - 1.0, amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum += (singlePerlin2(++seed, x, y).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singlePerlinFractalRigidMulti2(double x, double y) {
    var seed = this.seed;
    var sum = 1.0 - singlePerlin2(seed, x, y).abs(), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singlePerlin2(++seed, x, y).abs()) * amp;
    }

    return sum;
  }

  double getPerlin2(double x, double y) =>
      singlePerlin2(seed, x * frequency, y * frequency);

  double singlePerlin2(int seed, double x, double y) {
    final x0 = x.floor(), y0 = y.floor(), x1 = x0 + 1, y1 = y0 + 1;
    double xs, ys;

    switch (interp) {
      case Interp.Linear:
        xs = x - x0;
        ys = y - y0;
        break;
      case Interp.Hermite:
        xs = (x - x0).interpHermiteFunc;
        ys = (y - y0).interpHermiteFunc;
        break;
      case Interp.Quintic:
        xs = (x - x0).interpQuinticFunc;
        ys = (y - y0).interpQuinticFunc;
        break;
    }

    final xd0 = x - x0, yd0 = y - y0, xd1 = xd0 - 1, yd1 = yd0 - 1;

    return ys.lerp(
      xs.lerp(
        gradCoord2D(seed, x0, y0, xd0, yd0),
        gradCoord2D(seed, x1, y0, xd1, yd0),
      ),
      xs.lerp(
        gradCoord2D(seed, x0, y1, xd0, yd1),
        gradCoord2D(seed, x1, y1, xd1, yd1),
      ),
    );
  }
}


import 'package:fast_noise/src/utils.dart';

import 'package:fast_noise/src/noise/enums.dart';

class CubicNoise {
  final int seed, octaves;
  final double frequency, lacunarity, gain;
  final Interp interp;
  final FractalType fractalType;
  final CellularReturnType cellularReturnType;
  final double fractalBounding;

  CubicNoise(
      {this.seed = 1337,
      this.frequency = .01,
      this.interp = Interp.Quintic,
      this.octaves = 3,
      this.lacunarity = 2.0,
      this.gain = .5,
      this.fractalType = FractalType.FBM,
      this.cellularReturnType = CellularReturnType.CellValue})
      : fractalBounding = calculateFractalBounding(gain, octaves);

  double getCubicFractal3(double x, double y, double z) {
    x *= frequency;
    y *= frequency;
    z *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singleCubicFractalFBM3(x, y, z);
      case FractalType.Billow:
        return singleCubicFractalBillow3(x, y, z);
      case FractalType.RigidMulti:
        return singleCubicFractalRigidMulti3(x, y, z);
    }
  }

  double singleCubicFractalFBM3(double x, double y, double z) {
    var seed = this.seed, i = 0;
    var sum = singleCubic3(seed, x, y, z), amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += singleCubic3(++seed, x, y, z) * amp;
    }

    return sum * fractalBounding;
  }

  double singleCubicFractalBillow3(double x, double y, double z) {
    var seed = this.seed, i = 0;
    var sum = singleCubic3(seed, x, y, z).abs() * 2 - 1, amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += (singleCubic3(++seed, x, y, z).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singleCubicFractalRigidMulti3(double x, double y, double z) {
    var seed = this.seed, i = 0;
    var sum = 1.0 - singleCubic3(seed, x, y, z).abs(), amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singleCubic3(++seed, x, y, z).abs()) * amp;
    }

    return sum;
  }

  double getCubic3(double x, double y, double z) =>
      singleCubic3(seed, x * frequency, y * frequency, z * frequency);

  static const double CUBIC_3D_BOUNDING = 1.0 / (1.5 * 1.5 * 1.5);

  double singleCubic3(int seed, double x, double y, double z) {
    final x1 = x.floor(), y1 = y.floor(), z1 = z.floor();
    final x0 = x1 - 1,
        y0 = y1 - 1,
        z0 = z1 - 1,
        x2 = x1 + 1,
        y2 = y1 + 1,
        z2 = z1 + 1,
        x3 = x1 + 2,
        y3 = y1 + 2,
        z3 = z1 + 2;
    final xs = x - x1, ys = y - y1, zs = z - z1;

    return zs.cubicLerp(
          ys.cubicLerp(
            xs.cubicLerp(
              valCoord3D(seed, x0, y0, z0),
              valCoord3D(seed, x1, y0, z0),
              valCoord3D(seed, x2, y0, z0),
              valCoord3D(seed, x3, y0, z0),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y1, z0),
              valCoord3D(seed, x1, y1, z0),
              valCoord3D(seed, x2, y1, z0),
              valCoord3D(seed, x3, y1, z0),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y2, z0),
              valCoord3D(seed, x1, y2, z0),
              valCoord3D(seed, x2, y2, z0),
              valCoord3D(seed, x3, y2, z0),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y3, z0),
              valCoord3D(seed, x1, y3, z0),
              valCoord3D(seed, x2, y3, z0),
              valCoord3D(seed, x3, y3, z0),
            ),
          ),
          ys.cubicLerp(
            xs.cubicLerp(
              valCoord3D(seed, x0, y0, z1),
              valCoord3D(seed, x1, y0, z1),
              valCoord3D(seed, x2, y0, z1),
              valCoord3D(seed, x3, y0, z1),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y1, z1),
              valCoord3D(seed, x1, y1, z1),
              valCoord3D(seed, x2, y1, z1),
              valCoord3D(seed, x3, y1, z1),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y2, z1),
              valCoord3D(seed, x1, y2, z1),
              valCoord3D(seed, x2, y2, z1),
              valCoord3D(seed, x3, y2, z1),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y3, z1),
              valCoord3D(seed, x1, y3, z1),
              valCoord3D(seed, x2, y3, z1),
              valCoord3D(seed, x3, y3, z1),
            ),
          ),
          ys.cubicLerp(
            xs.cubicLerp(
              valCoord3D(seed, x0, y0, z2),
              valCoord3D(seed, x1, y0, z2),
              valCoord3D(seed, x2, y0, z2),
              valCoord3D(seed, x3, y0, z2),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y1, z2),
              valCoord3D(seed, x1, y1, z2),
              valCoord3D(seed, x2, y1, z2),
              valCoord3D(seed, x3, y1, z2),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y2, z2),
              valCoord3D(seed, x1, y2, z2),
              valCoord3D(seed, x2, y2, z2),
              valCoord3D(seed, x3, y2, z2),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y3, z2),
              valCoord3D(seed, x1, y3, z2),
              valCoord3D(seed, x2, y3, z2),
              valCoord3D(seed, x3, y3, z2),
            ),
          ),
          ys.cubicLerp(
            xs.cubicLerp(
              valCoord3D(seed, x0, y0, z3),
              valCoord3D(seed, x1, y0, z3),
              valCoord3D(seed, x2, y0, z3),
              valCoord3D(seed, x3, y0, z3),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y1, z3),
              valCoord3D(seed, x1, y1, z3),
              valCoord3D(seed, x2, y1, z3),
              valCoord3D(seed, x3, y1, z3),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y2, z3),
              valCoord3D(seed, x1, y2, z3),
              valCoord3D(seed, x2, y2, z3),
              valCoord3D(seed, x3, y2, z3),
            ),
            xs.cubicLerp(
              valCoord3D(seed, x0, y3, z3),
              valCoord3D(seed, x1, y3, z3),
              valCoord3D(seed, x2, y3, z3),
              valCoord3D(seed, x3, y3, z3),
            ),
          ),
        ) *
        CUBIC_3D_BOUNDING;
  }

  double getCubicFractal2(double x, double y) {
    x *= frequency;
    y *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singleCubicFractalFBM2(x, y);
      case FractalType.Billow:
        return singleCubicFractalBillow2(x, y);
      case FractalType.RigidMulti:
        return singleCubicFractalRigidMulti2(x, y);
    }
  }

  double singleCubicFractalFBM2(double x, double y) {
    var seed = this.seed, i = 0;
    var sum = singleCubic2(seed, x, y), amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum += singleCubic2(++seed, x, y) * amp;
    }

    return sum * fractalBounding;
  }

  double singleCubicFractalBillow2(double x, double y) {
    var seed = this.seed, i = 0;
    var sum = singleCubic2(seed, x, y).abs() * 2.0 - 1.0, amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum += (singleCubic2(++seed, x, y).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singleCubicFractalRigidMulti2(double x, double y) {
    var seed = this.seed, i = 0;
    var sum = 1 - singleCubic2(seed, x, y).abs(), amp = 1.0;

    while (++i < octaves) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singleCubic2(++seed, x, y).abs()) * amp;
    }

    return sum;
  }

  double getCubic2(double x, double y) {
    x *= frequency;
    y *= frequency;

    return singleCubic2(0, x, y);
  }

  static const double CUBIC_2D_BOUNDING = 1.0 / (1.5 * 1.5);

  double singleCubic2(int seed, double x, double y) {
    final x1 = x.floor(), y1 = y.floor();
    final x0 = x1 - 1,
        y0 = y1 - 1,
        x2 = x1 + 1,
        y2 = y1 + 1,
        x3 = x1 + 2,
        y3 = y1 + 2;
    final xs = x - x1, ys = y - y1;

    return ys.cubicLerp(
          xs.cubicLerp(
            valCoord2D(seed, x0, y0),
            valCoord2D(seed, x1, y0),
            valCoord2D(seed, x2, y0),
            valCoord2D(seed, x3, y0),
          ),
          xs.cubicLerp(
            valCoord2D(seed, x0, y1),
            valCoord2D(seed, x1, y1),
            valCoord2D(seed, x2, y1),
            valCoord2D(seed, x3, y1),
          ),
          xs.cubicLerp(
            valCoord2D(seed, x0, y2),
            valCoord2D(seed, x1, y2),
            valCoord2D(seed, x2, y2),
            valCoord2D(seed, x3, y2),
          ),
          xs.cubicLerp(
            valCoord2D(seed, x0, y3),
            valCoord2D(seed, x1, y3),
            valCoord2D(seed, x2, y3),
            valCoord2D(seed, x3, y3),
          ),
        ) *
        CUBIC_2D_BOUNDING;
  }
}

import 'package:fast_noise/src/utils.dart';

class WhiteNoise {
  final int seed;

  WhiteNoise({this.seed = 1337});

  double getWhiteNoise2(int x, int y) => valCoord2D(seed, x, y);

  double getWhiteNoise3(int x, int y, int z) => valCoord3D(seed, x, y, z);

  double getWhiteNoise4(int x, int y, int z, int w) =>
      valCoord4D(seed, x, y, z, w);

  double getWhiteNoiseInt2(int x, int y) {
    return valCoord2D(seed, x, y);
  }

  double getWhiteNoiseInt3(int x, int y, int z) {
    return valCoord3D(seed, x, y, z);
  }

  double getWhiteNoiseInt4(int x, int y, int z, int w) {
    return valCoord4D(seed, x, y, z, w);
  }
}

import 'package:fast_noise/src/utils.dart';

import 'package:fast_noise/src/noise/enums.dart';

class ValueNoise {
  final int seed, octaves;
  final double frequency, lacunarity, gain;
  final Interp interp;
  final FractalType fractalType;
  final CellularReturnType cellularReturnType;
  final double fractalBounding;

  ValueNoise(
      {this.seed = 1337,
      this.frequency = .01,
      this.interp = Interp.Quintic,
      this.octaves = 3,
      this.lacunarity = 2.0,
      this.gain = .5,
      this.fractalType = FractalType.FBM,
      this.cellularReturnType = CellularReturnType.CellValue})
      : fractalBounding = calculateFractalBounding(gain, octaves);

  double getValueFractal3(double x, double y, double z) {
    x *= frequency;
    y *= frequency;
    z *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singleValueFractalFBM3(x, y, z);
      case FractalType.Billow:
        return singleValueFractalBillow3(x, y, z);
      case FractalType.RigidMulti:
        return singleValueFractalRigidMulti3(x, y, z);
    }
  }

  double singleValueFractalFBM3(double x, double y, double z) {
    var seed = this.seed;
    var sum = singleValue3(seed, x, y, z), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += singleValue3(++seed, x, y, z) * amp;
    }

    return sum * fractalBounding;
  }

  double singleValueFractalBillow3(double x, double y, double z) {
    var seed = this.seed;
    var sum = singleValue3(seed, x, y, z).abs() * 2.0 - 1.0, amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum += (singleValue3(++seed, x, y, z).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singleValueFractalRigidMulti3(double x, double y, double z) {
    var seed = this.seed;
    var sum = 1.0 - singleValue3(seed, x, y, z).abs(), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      z *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singleValue3(++seed, x, y, z).abs()) * amp;
    }

    return sum;
  }

  double getValue3(double x, double y, double z) =>
      singleValue3(seed, x * frequency, y * frequency, z * frequency);

  double singleValue3(int seed, double x, double y, double z) {
    final x0 = x.floor(),
        y0 = y.floor(),
        z0 = z.floor(),
        x1 = x0 + 1,
        y1 = y0 + 1,
        z1 = z0 + 1;
    double xs, ys, zs;

    switch (interp) {
      case Interp.Linear:
        xs = x - x0;
        ys = y - y0;
        zs = z - z0;
        break;
      case Interp.Hermite:
        xs = (x - x0).interpHermiteFunc;
        ys = (y - y0).interpHermiteFunc;
        zs = (z - z0).interpHermiteFunc;
        break;
      case Interp.Quintic:
        xs = (x - x0).interpQuinticFunc;
        ys = (y - y0).interpQuinticFunc;
        zs = (z - z0).interpQuinticFunc;
        break;
    }

    final xf00 = xs.lerp(
          valCoord3D(seed, x0, y0, z0),
          valCoord3D(seed, x1, y0, z0),
        ),
        xf10 = xs.lerp(
          valCoord3D(seed, x0, y1, z0),
          valCoord3D(seed, x1, y1, z0),
        ),
        xf01 = xs.lerp(
          valCoord3D(seed, x0, y0, z1),
          valCoord3D(seed, x1, y0, z1),
        ),
        xf11 = xs.lerp(
          valCoord3D(seed, x0, y1, z1),
          valCoord3D(seed, x1, y1, z1),
        );

    return zs.lerp(
      ys.lerp(
        xf00,
        xf10,
      ),
      ys.lerp(
        xf01,
        xf11,
      ),
    );
  }

  double getValueFractal2(double x, double y) {
    x *= frequency;
    y *= frequency;

    switch (fractalType) {
      case FractalType.FBM:
        return singleValueFractalFBM2(x, y);
      case FractalType.Billow:
        return singleValueFractalBillow2(x, y);
      case FractalType.RigidMulti:
        return singleValueFractalRigidMulti2(x, y);
    }
  }

  double singleValueFractalFBM2(double x, double y) {
    var seed = this.seed;
    var sum = singleValue2(seed, x, y), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum += singleValue2(++seed, x, y) * amp;
    }

    return sum * fractalBounding;
  }

  double singleValueFractalBillow2(double x, double y) {
    var seed = this.seed;
    var sum = singleValue2(seed, x, y).abs() * 2.0 - 1.0, amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;
      amp *= gain;
      sum += (singleValue2(++seed, x, y).abs() * 2.0 - 1.0) * amp;
    }

    return sum * fractalBounding;
  }

  double singleValueFractalRigidMulti2(double x, double y) {
    var seed = this.seed;
    var sum = 1.0 - singleValue2(seed, x, y).abs(), amp = 1.0;

    for (var i = 1; i < octaves; i++) {
      x *= lacunarity;
      y *= lacunarity;

      amp *= gain;
      sum -= (1.0 - singleValue2(++seed, x, y).abs()) * amp;
    }

    return sum;
  }

  double getValue2(double x, double y) =>
      singleValue2(seed, x * frequency, y * frequency);

  double singleValue2(int seed, double x, double y) {
    final x0 = x.floor(), y0 = y.floor(), x1 = x0 + 1, y1 = y0 + 1;
    double xs, ys;

    switch (interp) {
      case Interp.Linear:
        xs = x - x0;
        ys = y - y0;
        break;
      case Interp.Hermite:
        xs = (x - x0).interpHermiteFunc;
        ys = (y - y0).interpHermiteFunc;
        break;
      case Interp.Quintic:
        xs = (x - x0).interpQuinticFunc;
        ys = (y - y0).interpQuinticFunc;
        break;
    }

    return ys.lerp(
      xs.lerp(
        valCoord2D(seed, x0, y0),
        valCoord2D(seed, x1, y0),
      ),
      xs.lerp(
        valCoord2D(seed, x0, y1),
        valCoord2D(seed, x1, y1),
      ),
    );
  }
}

	
	package com.mojang.blaze3d.platform;

import com.google.common.base.Joiner;
import com.google.common.collect.Lists;
import com.mojang.blaze3d.systems.RenderSystem;
import dqe;
import drd;
import drp;
import dse;
import dsh;
import dsl;
import dso;
import epe;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.LongSupplier;
import java.util.function.Supplier;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.lwjgl.Version;
import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWErrorCallback;
import org.lwjgl.glfw.GLFWErrorCallbackI;
import org.lwjgl.glfw.GLFWVidMode;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;

@dqe
public class GLX {
  private static final Logger LOGGER = LogManager.getLogger();
  
  private static String cpuInfo;
  
  public static String getOpenGLVersionString() {
    RenderSystem.assertOnRenderThread();
    if (GLFW.glfwGetCurrentContext() == 0L)
      return "NO CONTEXT"; 
    return GlStateManager._getString(7937) + " GL version " + GlStateManager._getString(7937) + ", " + GlStateManager._getString(7938);
  }
  
  public static int _getRefreshRate(drp $$0) {
    RenderSystem.assertOnRenderThread();
    long $$1 = GLFW.glfwGetWindowMonitor($$0.i());
    if ($$1 == 0L)
      $$1 = GLFW.glfwGetPrimaryMonitor(); 
    GLFWVidMode $$2 = ($$1 == 0L) ? null : GLFW.glfwGetVideoMode($$1);
    return ($$2 == null) ? 0 : $$2.refreshRate();
  }
  
  public static String _getLWJGLVersion() {
    RenderSystem.assertInInitPhase();
    return Version.getVersion();
  }
  
  public static LongSupplier _initGlfw() {
    LongSupplier $$2;
    RenderSystem.assertInInitPhase();
    drp.a(($$0, $$1) -> {
          throw new IllegalStateException(String.format("GLFW error before init: [0x%X]%s", new Object[] { $$0, $$1 }));
        });
    List<String> $$0 = Lists.newArrayList();
    GLFWErrorCallback $$1 = GLFW.glfwSetErrorCallback(($$1, $$2) -> $$0.add(String.format("GLFW error during init: [0x%X]%s", new Object[] { Integer.valueOf($$1), Long.valueOf($$2) })));
    if (GLFW.glfwInit()) {
      $$2 = (() -> (long)(GLFW.glfwGetTime() * 1.0E9D));
      for (String $$3 : $$0)
        LOGGER.error("GLFW error collected during initialization: {}", $$3); 
    } else {
      throw new IllegalStateException("Failed to initialize GLFW, errors: " + Joiner.on(",").join($$0));
    } 
    RenderSystem.setErrorCallback((GLFWErrorCallbackI)$$1);
    return $$2;
  }
  
  public static void _setGlfwErrorCallback(GLFWErrorCallbackI $$0) {
    RenderSystem.assertInInitPhase();
    GLFWErrorCallback $$1 = GLFW.glfwSetErrorCallback($$0);
    if ($$1 != null)
      $$1.free(); 
  }
  
  public static boolean _shouldClose(drp $$0) {
    return GLFW.glfwWindowShouldClose($$0.i());
  }
  
  public static void _init(int $$0, boolean $$1) {
    RenderSystem.assertInInitPhase();
    try {
      CentralProcessor $$2 = (new SystemInfo()).getHardware().getProcessor();
      cpuInfo = String.format("%dx %s", new Object[] { Integer.valueOf($$2.getLogicalProcessorCount()), $$2.getProcessorIdentifier().getName() }).replaceAll("\\s+", " ");
    } catch (Throwable throwable) {}
    drd.a($$0, $$1);
  }
  
  public static String _getCpuInfo() {
    return (cpuInfo == null) ? "<unknown>" : cpuInfo;
  }
  
  public static void _renderCrosshair(int $$0, boolean $$1, boolean $$2, boolean $$3) {
    RenderSystem.assertOnRenderThread();
    GlStateManager._disableTexture();
    GlStateManager._depthMask(false);
    GlStateManager._disableCull();
    RenderSystem.setShader(epe::ap);
    dsl $$4 = RenderSystem.renderThreadTesselator();
    dse $$5 = $$4.c();
    RenderSystem.lineWidth(4.0F);
    $$5.a(dso.b.a, dsh.o);
    if ($$1) {
      $$5.a(0.0D, 0.0D, 0.0D).a(0, 0, 0, 255).b(1.0F, 0.0F, 0.0F).c();
      $$5.a($$0, 0.0D, 0.0D).a(0, 0, 0, 255).b(1.0F, 0.0F, 0.0F).c();
    } 
    if ($$2) {
      $$5.a(0.0D, 0.0D, 0.0D).a(0, 0, 0, 255).b(0.0F, 1.0F, 0.0F).c();
      $$5.a(0.0D, $$0, 0.0D).a(0, 0, 0, 255).b(0.0F, 1.0F, 0.0F).c();
    } 
    if ($$3) {
      $$5.a(0.0D, 0.0D, 0.0D).a(0, 0, 0, 255).b(0.0F, 0.0F, 1.0F).c();
      $$5.a(0.0D, 0.0D, $$0).a(0, 0, 0, 255).b(0.0F, 0.0F, 1.0F).c();
    } 
    $$4.b();
    RenderSystem.lineWidth(2.0F);
    $$5.a(dso.b.a, dsh.o);
    if ($$1) {
      $$5.a(0.0D, 0.0D, 0.0D).a(255, 0, 0, 255).b(1.0F, 0.0F, 0.0F).c();
      $$5.a($$0, 0.0D, 0.0D).a(255, 0, 0, 255).b(1.0F, 0.0F, 0.0F).c();
    } 
    if ($$2) {
      $$5.a(0.0D, 0.0D, 0.0D).a(0, 255, 0, 255).b(0.0F, 1.0F, 0.0F).c();
      $$5.a(0.0D, $$0, 0.0D).a(0, 255, 0, 255).b(0.0F, 1.0F, 0.0F).c();
    } 
    if ($$3) {
      $$5.a(0.0D, 0.0D, 0.0D).a(127, 127, 255, 255).b(0.0F, 0.0F, 1.0F).c();
      $$5.a(0.0D, 0.0D, $$0).a(127, 127, 255, 255).b(0.0F, 0.0F, 1.0F).c();
    } 
    $$4.b();
    RenderSystem.lineWidth(1.0F);
    GlStateManager._enableCull();
    GlStateManager._depthMask(true);
    GlStateManager._enableTexture();
  }
  
  public static <T> T make(Supplier<T> $$0) {
    return $$0.get();
  }
  
  public static <T> T make(T $$0, Consumer<T> $$1) {
    $$1.accept($$0);
    return $$0;
  }
}


package com.mojang.blaze3d.platform;

import dqe;

@dqe
public class GlConst {
  public static final int GL_READ_FRAMEBUFFER = 36008;
  
  public static final int GL_DRAW_FRAMEBUFFER = 36009;
  
  public static final int GL_TRUE = 1;
  
  public static final int GL_FALSE = 0;
  
  public static final int GL_NONE = 0;
  
  public static final int GL_LINES = 1;
  
  public static final int GL_LINE_STRIP = 3;
  
  public static final int GL_TRIANGLE_STRIP = 5;
  
  public static final int GL_TRIANGLE_FAN = 6;
  
  public static final int GL_TRIANGLES = 4;
  
  public static final int GL_WRITE_ONLY = 35001;
  
  public static final int GL_EQUAL = 514;
  
  public static final int GL_LEQUAL = 515;
  
  public static final int GL_GREATER = 516;
  
  public static final int GL_GEQUAL = 518;
  
  public static final int GL_ALWAYS = 519;
  
  public static final int GL_TEXTURE_MAG_FILTER = 10240;
  
  public static final int GL_TEXTURE_MIN_FILTER = 10241;
  
  public static final int GL_TEXTURE_WRAP_S = 10242;
  
  public static final int GL_TEXTURE_WRAP_T = 10243;
  
  public static final int GL_NEAREST = 9728;
  
  public static final int GL_LINEAR = 9729;
  
  public static final int GL_NEAREST_MIPMAP_LINEAR = 9986;
  
  public static final int GL_LINEAR_MIPMAP_LINEAR = 9987;
  
  public static final int GL_CLAMP_TO_EDGE = 33071;
  
  public static final int GL_FRONT = 1028;
  
  public static final int GL_FRONT_AND_BACK = 1032;
  
  public static final int GL_LINE = 6913;
  
  public static final int GL_FILL = 6914;
  
  public static final int GL_BYTE = 5120;
  
  public static final int GL_UNSIGNED_BYTE = 5121;
  
  public static final int GL_SHORT = 5122;
  
  public static final int GL_UNSIGNED_SHORT = 5123;
  
  public static final int GL_INT = 5124;
  
  public static final int GL_UNSIGNED_INT = 5125;
  
  public static final int GL_FLOAT = 5126;
  
  public static final int GL_ZERO = 0;
  
  public static final int GL_ONE = 1;
  
  public static final int GL_SRC_COLOR = 768;
  
  public static final int GL_ONE_MINUS_SRC_COLOR = 769;
  
  public static final int GL_SRC_ALPHA = 770;
  
  public static final int GL_ONE_MINUS_SRC_ALPHA = 771;
  
  public static final int GL_DST_ALPHA = 772;
  
  public static final int GL_ONE_MINUS_DST_ALPHA = 773;
  
  public static final int GL_DST_COLOR = 774;
  
  public static final int GL_ONE_MINUS_DST_COLOR = 775;
  
  public static final int GL_REPLACE = 7681;
  
  public static final int GL_DEPTH_BUFFER_BIT = 256;
  
  public static final int GL_COLOR_BUFFER_BIT = 16384;
  
  public static final int GL_RGBA8 = 32856;
  
  public static final int GL_PROXY_TEXTURE_2D = 32868;
  
  public static final int GL_RGBA = 6408;
  
  public static final int GL_TEXTURE_WIDTH = 4096;
  
  public static final int GL_BGR = 32992;
  
  public static final int GL_FUNC_ADD = 32774;
  
  public static final int GL_MIN = 32775;
  
  public static final int GL_MAX = 32776;
  
  public static final int GL_FUNC_SUBTRACT = 32778;
  
  public static final int GL_FUNC_REVERSE_SUBTRACT = 32779;
  
  public static final int GL_DEPTH_COMPONENT24 = 33190;
  
  public static final int GL_STATIC_DRAW = 35044;
  
  public static final int GL_DYNAMIC_DRAW = 35048;
  
  public static final int GL_UNPACK_SWAP_BYTES = 3312;
  
  public static final int GL_UNPACK_LSB_FIRST = 3313;
  
  public static final int GL_UNPACK_ROW_LENGTH = 3314;
  
  public static final int GL_UNPACK_SKIP_ROWS = 3315;
  
  public static final int GL_UNPACK_SKIP_PIXELS = 3316;
  
  public static final int GL_UNPACK_ALIGNMENT = 3317;
  
  public static final int GL_PACK_ALIGNMENT = 3333;
  
  public static final int GL_MAX_TEXTURE_SIZE = 3379;
  
  public static final int GL_TEXTURE_2D = 3553;
  
  public static final int GL_DEPTH_COMPONENT = 6402;
  
  public static final int GL_DEPTH_COMPONENT32 = 33191;
  
  public static final int GL_FRAMEBUFFER = 36160;
  
  public static final int GL_RENDERBUFFER = 36161;
  
  public static final int GL_COLOR_ATTACHMENT0 = 36064;
  
  public static final int GL_DEPTH_ATTACHMENT = 36096;
  
  public static final int GL_FRAMEBUFFER_COMPLETE = 36053;
  
  public static final int GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
  
  public static final int GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
  
  public static final int GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER = 36059;
  
  public static final int GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER = 36060;
  
  public static final int GL_FRAMEBUFFER_UNSUPPORTED = 36061;
  
  public static final int GL_LINK_STATUS = 35714;
  
  public static final int GL_COMPILE_STATUS = 35713;
  
  public static final int GL_VERTEX_SHADER = 35633;
  
  public static final int GL_FRAGMENT_SHADER = 35632;
  
  public static final int GL_TEXTURE0 = 33984;
  
  public static final int GL_TEXTURE1 = 33985;
  
  public static final int GL_TEXTURE2 = 33986;
  
  public static final int GL_DEPTH_TEXTURE_MODE = 34891;
  
  public static final int GL_TEXTURE_COMPARE_MODE = 34892;
  
  public static final int GL_ARRAY_BUFFER = 34962;
  
  public static final int GL_ELEMENT_ARRAY_BUFFER = 34963;
  
  public static final int GL_ALPHA_BIAS = 3357;
  
  public static final int GL_RGB = 6407;
  
  public static final int GL_RG = 33319;
  
  public static final int GL_RED = 6403;
  
  public static final int GL_OUT_OF_MEMORY = 1285;
}

package com.mojang.blaze3d.platform;

import ab;
import com.mojang.blaze3d.systems.RenderSystem;
import dqe;
import drl;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.ReadableByteChannel;
import java.util.concurrent.ThreadLocalRandom;
import javax.annotation.Nullable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.lwjgl.opengl.GL11;
import org.lwjgl.system.MemoryUtil;

@dqe
public class TextureUtil {
  private static final Logger LOGGER = LogManager.getLogger();
  
  public static final int MIN_MIPMAP_LEVEL = 0;
  
  private static final int DEFAULT_IMAGE_BUFFER_SIZE = 8192;
  
  public static int generateTextureId() {
    RenderSystem.assertOnRenderThreadOrInit();
    if (ab.aJ) {
      int[] $$0 = new int[ThreadLocalRandom.current().nextInt(15) + 1];
      GlStateManager._genTextures($$0);
      int $$1 = GlStateManager._genTexture();
      GlStateManager._deleteTextures($$0);
      return $$1;
    } 
    return GlStateManager._genTexture();
  }
  
  public static void releaseTextureId(int $$0) {
    RenderSystem.assertOnRenderThreadOrInit();
    GlStateManager._deleteTexture($$0);
  }
  
  public static void prepareImage(int $$0, int $$1, int $$2) {
    prepareImage(drl.b.a, $$0, 0, $$1, $$2);
  }
  
  public static void prepareImage(drl.b $$0, int $$1, int $$2, int $$3) {
    prepareImage($$0, $$1, 0, $$2, $$3);
  }
  
  public static void prepareImage(int $$0, int $$1, int $$2, int $$3) {
    prepareImage(drl.b.a, $$0, $$1, $$2, $$3);
  }
  
  public static void prepareImage(drl.b $$0, int $$1, int $$2, int $$3, int $$4) {
    RenderSystem.assertOnRenderThreadOrInit();
    bind($$1);
    if ($$2 >= 0) {
      GlStateManager._texParameter(3553, 33085, $$2);
      GlStateManager._texParameter(3553, 33082, 0);
      GlStateManager._texParameter(3553, 33083, $$2);
      GlStateManager._texParameter(3553, 34049, 0.0F);
    } 
    for (int $$5 = 0; $$5 <= $$2; $$5++)
      GlStateManager._texImage2D(3553, $$5, $$0.a(), $$3 >> $$5, $$4 >> $$5, 0, 6408, 5121, null); 
  }
  
  private static void bind(int $$0) {
    RenderSystem.assertOnRenderThreadOrInit();
    GlStateManager._bindTexture($$0);
  }
  
  public static ByteBuffer readResource(InputStream $$0) throws IOException {
    ByteBuffer $$4;
    if ($$0 instanceof FileInputStream) {
      FileInputStream $$1 = (FileInputStream)$$0;
      FileChannel $$2 = $$1.getChannel();
      ByteBuffer $$3 = MemoryUtil.memAlloc((int)$$2.size() + 1);
      while ($$2.read($$3) != -1);
    } else {
      $$4 = MemoryUtil.memAlloc(8192);
      ReadableByteChannel $$5 = Channels.newChannel($$0);
      while ($$5.read($$4) != -1) {
        if ($$4.remaining() == 0)
          $$4 = MemoryUtil.memRealloc($$4, $$4.capacity() * 2); 
      } 
    } 
    return $$4;
  }
  
  @Nullable
  public static String readResourceAsString(InputStream $$0) {
    RenderSystem.assertOnRenderThread();
    ByteBuffer $$1 = null;
    try {
      $$1 = readResource($$0);
      int $$2 = $$1.position();
      $$1.rewind();
      return MemoryUtil.memASCII($$1, $$2);
    } catch (IOException iOException) {
    
    } finally {
      if ($$1 != null)
        MemoryUtil.memFree($$1); 
    } 
	
    return null;
  }
  
  public static void writeAsPNG(String $$0, int $$1, int $$2, int $$3, int $$4) {
    RenderSystem.assertOnRenderThread();
    bind($$1);
    for (int $$5 = 0; $$5 <= $$2; $$5++) {
      String $$6 = $$0 + "_" + $$0 + ".png";
      int $$7 = $$3 >> $$5;
      int $$8 = $$4 >> $$5;
      try {
        drl $$9 = new drl($$7, $$8, false);
        try {
          $$9.a($$5, false);
          $$9.a($$6);
          LOGGER.debug("Exported png to: {}", (new File($$6)).getAbsolutePath());
          $$9.close();
        } catch (Throwable throwable) {
          try {
            $$9.close();
          } catch (Throwable throwable1) {
            throwable.addSuppressed(throwable1);
          } 
          throw throwable;
        } 
      } catch (IOException $$10) {
        LOGGER.debug("Unable to write: ", $$10);
      } 
    } 
  }
  
  public static void initTexture(IntBuffer $$0, int $$1, int $$2) {
    RenderSystem.assertOnRenderThread();
    GL11.glPixelStorei(3312, 0);
    GL11.glPixelStorei(3313, 0);
    GL11.glPixelStorei(3314, 0);
    GL11.glPixelStorei(3315, 0);
    GL11.glPixelStorei(3316, 0);
    GL11.glPixelStorei(3317, 4);
    GL11.glTexImage2D(3553, 0, 6408, $$1, $$2, 0, 32993, 33639, $$0);
    GL11.glTexParameteri(3553, 10240, 9728);
    GL11.glTexParameteri(3553, 10241, 9729);
  }
}

package com.mojang.blaze3d.systems;

import aiy;
import com.mojang.blaze3d.platform.GlStateManager;
import dsf;
import dso;
import it.unimi.dsi.fastutil.ints.IntConsumer;
import java.nio.ByteBuffer;
import java.util.Objects;

public final class a {
  private final int a;
  
  private final int b;
  
  private final a c;
  
  private int d;
  
  private dso.a e = dso.a.a;
  
  private int f;
  
  a(int $$0, int $$1, a $$2) {
    this.a = $$0;
    this.b = $$1;
    this.c = $$2;
  }
  
  void a(int $$0) {
    if ($$0 <= this.f)
      return; 
    $$0 = aiy.d($$0 * 2, this.b);
    RenderSystem.LOGGER.debug("Growing IndexBuffer: Old limit {}, new limit {}.", Integer.valueOf(this.f), Integer.valueOf($$0));
    if (this.d == 0)
      this.d = GlStateManager._glGenBuffers(); 
    dso.a $$1 = dso.a.a($$0);
    int $$2 = aiy.d($$0 * $$1.e, 4);
    GlStateManager._glBindBuffer(34963, this.d);
    GlStateManager._glBufferData(34963, $$2, 35048);
    ByteBuffer $$3 = GlStateManager._glMapBuffer(34963, 35001);
    if ($$3 == null)
      throw new RuntimeException("Failed to map GL buffer"); 
    this.e = $$1;
    IntConsumer $$4 = a($$3);
    int $$5;
    for ($$5 = 0; $$5 < $$0; $$5 += this.b)
      this.c.accept($$4, $$5 * this.a / this.b); 
    GlStateManager._glUnmapBuffer(34963);
    GlStateManager._glBindBuffer(34963, 0);
    this.f = $$0;
    dsf.b();
  }
  
  private IntConsumer a(ByteBuffer $$0) {
    switch (RenderSystem.null.a[this.e.ordinal()]) {
      case 1:
        return $$1 -> $$0.put((byte)$$1);
      case 2:
        return $$1 -> $$0.putShort((short)$$1);
    } 
    Objects.requireNonNull($$0);
    return $$0::putInt;
  }
  
  public int a() {
    return this.d;
  }
  
  public dso.a b() {
    return this.e;
  }
  
  private static interface a {
    void accept(IntConsumer param2IntConsumer, int param2Int);
  }
}

package com.mojang.blaze3d.systems;

import aiy;
import c;
import com.google.common.collect.Queues;
import com.mojang.blaze3d.platform.GLX;
import com.mojang.blaze3d.platform.GlStateManager;
import d;
import dqe;
import dqv;
import dsf;
import dsj;
import dsl;
import dso;
import dxi;
import dxo;
import dxs;
import epw;
import ezf;
import ezs;
import it.unimi.dsi.fastutil.ints.IntConsumer;
import java.nio.ByteBuffer;
import java.nio.FloatBuffer;
import java.nio.IntBuffer;
import java.util.Objects;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.function.Consumer;
import java.util.function.IntConsumer;
import java.util.function.IntSupplier;
import java.util.function.LongSupplier;
import java.util.function.Supplier;
import javax.annotation.Nullable;
import k;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.lwjgl.glfw.GLFW;
import org.lwjgl.glfw.GLFWErrorCallbackI;
import yh;

@dqe
public class RenderSystem {
  static final Logger LOGGER = LogManager.getLogger();
  
  private static final ConcurrentLinkedQueue<dqv> recordingQueue = Queues.newConcurrentLinkedQueue();
  
  private static final dsl RENDER_THREAD_TESSELATOR = new dsl();
  
  private static final int MINIMUM_ATLAS_TEXTURE_SIZE = 1024;
  
  private static boolean isReplayingQueue;
  
  @Nullable
  private static Thread gameThread;
  
  @Nullable
  private static Thread renderThread;
  
  private static int MAX_SUPPORTED_TEXTURE_SIZE = -1;
  
  private static boolean isInInit;
  
  private static double lastDrawTime = Double.MIN_VALUE;
  
  private static final a sharedSequential = new a(1, 1, IntConsumer::accept);
  
  private static final a sharedSequentialQuad;
  
  private static final a sharedSequentialLines;
  
  static {
    sharedSequentialQuad = new a(4, 6, ($$0, $$1) -> {
          $$0.accept($$1 + 0);
          $$0.accept($$1 + 1);
          $$0.accept($$1 + 2);
          $$0.accept($$1 + 2);
          $$0.accept($$1 + 3);
          $$0.accept($$1 + 0);
        });
    sharedSequentialLines = new a(4, 6, ($$0, $$1) -> {
          $$0.accept($$1 + 0);
          $$0.accept($$1 + 1);
          $$0.accept($$1 + 2);
          $$0.accept($$1 + 3);
          $$0.accept($$1 + 2);
          $$0.accept($$1 + 1);
        });
  }
  
  private static c inverseViewRotationMatrix = new c();
  
  private static d projectionMatrix = new d();
  
  private static d savedProjectionMatrix = new d();
  
  private static dsj modelViewStack = new dsj();
  
  private static d modelViewMatrix = new d();
  
  private static d textureMatrix = new d();
  
  private static final int[] shaderTextures = new int[12];
  
  private static final float[] shaderColor = new float[] { 1.0F, 1.0F, 1.0F, 1.0F };
  
  private static float shaderFogStart;
  
  private static float shaderFogEnd = 1.0F;
  
  private static final float[] shaderFogColor = new float[] { 0.0F, 0.0F, 0.0F, 0.0F };
  
  private static final k[] shaderLightDirections = new k[2];
  
  private static float shaderGameTime;
  
  private static float shaderLineWidth = 1.0F;
  
  private static String apiDescription = "Unknown";
  
  @Nullable
  private static epw shader;
  
  static {
    projectionMatrix.b();
    savedProjectionMatrix.b();
    modelViewMatrix.b();
    textureMatrix.b();
  }
  
  public static void initRenderThread() {
    if (renderThread != null || gameThread == Thread.currentThread())
      throw new IllegalStateException("Could not initialize render thread"); 
    renderThread = Thread.currentThread();
  }
  
  public static boolean isOnRenderThread() {
    return (Thread.currentThread() == renderThread);
  }
  
  public static boolean isOnRenderThreadOrInit() {
    return (isInInit || isOnRenderThread());
  }
  
  public static void initGameThread(boolean $$0) {
    boolean $$1 = (renderThread == Thread.currentThread());
    if (gameThread != null || renderThread == null || $$1 == $$0)
      throw new IllegalStateException("Could not initialize tick thread"); 
    gameThread = Thread.currentThread();
  }
  
  public static boolean isOnGameThread() {
    return true;
  }
  
  public static void assertInInitPhase() {
    if (!isInInitPhase())
      throw constructThreadException(); 
  }
  
  public static void assertOnGameThreadOrInit() {
    if (isInInit || isOnGameThread())
      return; 
    throw constructThreadException();
  }
  
  public static void assertOnRenderThreadOrInit() {
    if (isInInit || isOnRenderThread())
      return; 
    throw constructThreadException();
  }
  
  public static void assertOnRenderThread() {
    if (!isOnRenderThread())
      throw constructThreadException(); 
  }
  
  public static void assertOnGameThread() {
    if (!isOnGameThread())
      throw constructThreadException(); 
  }
  
  private static IllegalStateException constructThreadException() {
    return new IllegalStateException("Rendersystem called from wrong thread");
  }
  
  public static boolean isInInitPhase() {
    return true;
  }
  
  public static void recordRenderCall(dqv $$0) {
    recordingQueue.add($$0);
  }
  
  public static void flipFrame(long $$0) {
    GLFW.glfwPollEvents();
    replayQueue();
    dsl.a().c().f();
    GLFW.glfwSwapBuffers($$0);
    GLFW.glfwPollEvents();
  }
  
  public static void replayQueue() {
    isReplayingQueue = true;
    while (!recordingQueue.isEmpty()) {
      dqv $$0 = recordingQueue.poll();
      $$0.execute();
    } 
    isReplayingQueue = false;
  }
  
  public static void limitDisplayFPS(int $$0) {
    double $$1 = lastDrawTime + 1.0D / $$0;
    double $$2 = GLFW.glfwGetTime();
    while ($$2 < $$1) {
      GLFW.glfwWaitEventsTimeout($$1 - $$2);
      $$2 = GLFW.glfwGetTime();
    } 
    lastDrawTime = $$2;
  }
  
  public static void disableDepthTest() {
    assertOnRenderThread();
    GlStateManager._disableDepthTest();
  }
  
  public static void enableDepthTest() {
    assertOnGameThreadOrInit();
    GlStateManager._enableDepthTest();
  }
  
  public static void enableScissor(int $$0, int $$1, int $$2, int $$3) {
    assertOnGameThreadOrInit();
    GlStateManager._enableScissorTest();
    GlStateManager._scissorBox($$0, $$1, $$2, $$3);
  }
  
  public static void disableScissor() {
    assertOnGameThreadOrInit();
    GlStateManager._disableScissorTest();
  }
  
  public static void depthFunc(int $$0) {
    assertOnRenderThread();
    GlStateManager._depthFunc($$0);
  }
  
  public static void depthMask(boolean $$0) {
    assertOnRenderThread();
    GlStateManager._depthMask($$0);
  }
  
  public static void enableBlend() {
    assertOnRenderThread();
    GlStateManager._enableBlend();
  }
  
  public static void disableBlend() {
    assertOnRenderThread();
    GlStateManager._disableBlend();
  }
  
  public static void blendFunc(GlStateManager.SourceFactor $$0, GlStateManager.DestFactor $$1) {
    assertOnRenderThread();
    GlStateManager._blendFunc($$0.value, $$1.value);
  }
  
  public static void blendFunc(int $$0, int $$1) {
    assertOnRenderThread();
    GlStateManager._blendFunc($$0, $$1);
  }
  
  public static void blendFuncSeparate(GlStateManager.SourceFactor $$0, GlStateManager.DestFactor $$1, GlStateManager.SourceFactor $$2, GlStateManager.DestFactor $$3) {
    assertOnRenderThread();
    GlStateManager._blendFuncSeparate($$0.value, $$1.value, $$2.value, $$3.value);
  }
  
  public static void blendFuncSeparate(int $$0, int $$1, int $$2, int $$3) {
    assertOnRenderThread();
    GlStateManager._blendFuncSeparate($$0, $$1, $$2, $$3);
  }
  
  public static void blendEquation(int $$0) {
    assertOnRenderThread();
    GlStateManager._blendEquation($$0);
  }
  
  public static void enableCull() {
    assertOnRenderThread();
    GlStateManager._enableCull();
  }
  
  public static void disableCull() {
    assertOnRenderThread();
    GlStateManager._disableCull();
  }
  
  public static void polygonMode(int $$0, int $$1) {
    assertOnRenderThread();
    GlStateManager._polygonMode($$0, $$1);
  }
  
  public static void enablePolygonOffset() {
    assertOnRenderThread();
    GlStateManager._enablePolygonOffset();
  }
  
  public static void disablePolygonOffset() {
    assertOnRenderThread();
    GlStateManager._disablePolygonOffset();
  }
  
  public static void polygonOffset(float $$0, float $$1) {
    assertOnRenderThread();
    GlStateManager._polygonOffset($$0, $$1);
  }
  
  public static void enableColorLogicOp() {
    assertOnRenderThread();
    GlStateManager._enableColorLogicOp();
  }
  
  public static void disableColorLogicOp() {
    assertOnRenderThread();
    GlStateManager._disableColorLogicOp();
  }
  
  public static void logicOp(GlStateManager.g $$0) {
    assertOnRenderThread();
    GlStateManager._logicOp($$0.q);
  }
  
  public static void activeTexture(int $$0) {
    assertOnRenderThread();
    GlStateManager._activeTexture($$0);
  }
  
  public static void enableTexture() {
    assertOnRenderThread();
    GlStateManager._enableTexture();
  }
  
  public static void disableTexture() {
    assertOnRenderThread();
    GlStateManager._disableTexture();
  }
  
  public static void texParameter(int $$0, int $$1, int $$2) {
    GlStateManager._texParameter($$0, $$1, $$2);
  }
  
  public static void deleteTexture(int $$0) {
    assertOnGameThreadOrInit();
    GlStateManager._deleteTexture($$0);
  }
  
  public static void bindTextureForSetup(int $$0) {
    bindTexture($$0);
  }
  
  public static void bindTexture(int $$0) {
    GlStateManager._bindTexture($$0);
  }
  
  public static void viewport(int $$0, int $$1, int $$2, int $$3) {
    assertOnGameThreadOrInit();
    GlStateManager._viewport($$0, $$1, $$2, $$3);
  }
  
  public static void colorMask(boolean $$0, boolean $$1, boolean $$2, boolean $$3) {
    assertOnRenderThread();
    GlStateManager._colorMask($$0, $$1, $$2, $$3);
  }
  
  public static void stencilFunc(int $$0, int $$1, int $$2) {
    assertOnRenderThread();
    GlStateManager._stencilFunc($$0, $$1, $$2);
  }
  
  public static void stencilMask(int $$0) {
    assertOnRenderThread();
    GlStateManager._stencilMask($$0);
  }
  
  public static void stencilOp(int $$0, int $$1, int $$2) {
    assertOnRenderThread();
    GlStateManager._stencilOp($$0, $$1, $$2);
  }
  
  public static void clearDepth(double $$0) {
    assertOnGameThreadOrInit();
    GlStateManager._clearDepth($$0);
  }
  
  public static void clearColor(float $$0, float $$1, float $$2, float $$3) {
    assertOnGameThreadOrInit();
    GlStateManager._clearColor($$0, $$1, $$2, $$3);
  }
  
  public static void clearStencil(int $$0) {
    assertOnRenderThread();
    GlStateManager._clearStencil($$0);
  }
  
  public static void clear(int $$0, boolean $$1) {
    assertOnGameThreadOrInit();
    GlStateManager._clear($$0, $$1);
  }
  
  public static void setShaderFogStart(float $$0) {
    assertOnRenderThread();
    _setShaderFogStart($$0);
  }
  
  private static void _setShaderFogStart(float $$0) {
    shaderFogStart = $$0;
  }
  
  public static float getShaderFogStart() {
    assertOnRenderThread();
    return shaderFogStart;
  }
  
  public static void setShaderFogEnd(float $$0) {
    assertOnRenderThread();
    _setShaderFogEnd($$0);
  }
  
  private static void _setShaderFogEnd(float $$0) {
    shaderFogEnd = $$0;
  }
  
  public static float getShaderFogEnd() {
    assertOnRenderThread();
    return shaderFogEnd;
  }
  
  public static void setShaderFogColor(float $$0, float $$1, float $$2, float $$3) {
    assertOnRenderThread();
    _setShaderFogColor($$0, $$1, $$2, $$3);
  }
  
  public static void setShaderFogColor(float $$0, float $$1, float $$2) {
    setShaderFogColor($$0, $$1, $$2, 1.0F);
  }
  
  private static void _setShaderFogColor(float $$0, float $$1, float $$2, float $$3) {
    shaderFogColor[0] = $$0;
    shaderFogColor[1] = $$1;
    shaderFogColor[2] = $$2;
    shaderFogColor[3] = $$3;
  }
  
  public static float[] getShaderFogColor() {
    assertOnRenderThread();
    return shaderFogColor;
  }
  
  public static void setShaderLights(k $$0, k $$1) {
    assertOnRenderThread();
    _setShaderLights($$0, $$1);
  }
  
  public static void _setShaderLights(k $$0, k $$1) {
    shaderLightDirections[0] = $$0;
    shaderLightDirections[1] = $$1;
  }
  
  public static void setupShaderLights(epw $$0) {
    assertOnRenderThread();
    if ($$0.g != null)
      $$0.g.a(shaderLightDirections[0]); 
    if ($$0.h != null)
      $$0.h.a(shaderLightDirections[1]); 
  }
  
  public static void setShaderColor(float $$0, float $$1, float $$2, float $$3) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> _setShaderColor($$0, $$1, $$2, $$3));
    } else {
      _setShaderColor($$0, $$1, $$2, $$3);
    } 
  }
  
  private static void _setShaderColor(float $$0, float $$1, float $$2, float $$3) {
    shaderColor[0] = $$0;
    shaderColor[1] = $$1;
    shaderColor[2] = $$2;
    shaderColor[3] = $$3;
  }
  
  public static float[] getShaderColor() {
    assertOnRenderThread();
    return shaderColor;
  }
  
  public static void drawElements(int $$0, int $$1, int $$2) {
    assertOnRenderThread();
    GlStateManager._drawElements($$0, $$1, $$2, 0L);
  }
  
  public static void lineWidth(float $$0) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> shaderLineWidth = $$0);
    } else {
      shaderLineWidth = $$0;
    } 
  }
  
  public static float getShaderLineWidth() {
    assertOnRenderThread();
    return shaderLineWidth;
  }
  
  public static void pixelStore(int $$0, int $$1) {
    assertOnGameThreadOrInit();
    GlStateManager._pixelStore($$0, $$1);
  }
  
  public static void readPixels(int $$0, int $$1, int $$2, int $$3, int $$4, int $$5, ByteBuffer $$6) {
    assertOnRenderThread();
    GlStateManager._readPixels($$0, $$1, $$2, $$3, $$4, $$5, $$6);
  }
  
  public static void getString(int $$0, Consumer<String> $$1) {
    assertOnRenderThread();
    $$1.accept(GlStateManager._getString($$0));
  }
  
  public static String getBackendDescription() {
    assertInInitPhase();
    return String.format("LWJGL version %s", new Object[] { GLX._getLWJGLVersion() });
  }
  
  public static String getApiDescription() {
    return apiDescription;
  }
  
  public static LongSupplier initBackendSystem() {
    assertInInitPhase();
    return GLX._initGlfw();
  }
  
  public static void initRenderer(int $$0, boolean $$1) {
    assertInInitPhase();
    GLX._init($$0, $$1);
    apiDescription = GLX.getOpenGLVersionString();
  }
  
  public static void setErrorCallback(GLFWErrorCallbackI $$0) {
    assertInInitPhase();
    GLX._setGlfwErrorCallback($$0);
  }
  
  public static void renderCrosshair(int $$0) {
    assertOnRenderThread();
    GLX._renderCrosshair($$0, true, true, true);
  }
  
  public static String getCapsString() {
    assertOnRenderThread();
    return "Using framebuffer using OpenGL 3.2";
  }
  
  public static void setupDefaultState(int $$0, int $$1, int $$2, int $$3) {
    assertInInitPhase();
    GlStateManager._enableTexture();
    GlStateManager._clearDepth(1.0D);
    GlStateManager._enableDepthTest();
    GlStateManager._depthFunc(515);
    projectionMatrix.b();
    savedProjectionMatrix.b();
    modelViewMatrix.b();
    textureMatrix.b();
    GlStateManager._viewport($$0, $$1, $$2, $$3);
  }
  
  public static int maxSupportedTextureSize() {
    if (MAX_SUPPORTED_TEXTURE_SIZE == -1) {
      assertOnRenderThreadOrInit();
      int $$0 = GlStateManager._getInteger(3379);
      for (int $$1 = Math.max(32768, $$0); $$1 >= 1024; $$1 >>= 1) {
        GlStateManager._texImage2D(32868, 0, 6408, $$1, $$1, 0, 6408, 5121, null);
        int $$2 = GlStateManager._getTexLevelParameter(32868, 0, 4096);
        if ($$2 != 0) {
          MAX_SUPPORTED_TEXTURE_SIZE = $$1;
          return $$1;
        } 
      } 
      MAX_SUPPORTED_TEXTURE_SIZE = Math.max($$0, 1024);
      LOGGER.info("Failed to determine maximum texture size by probing, trying GL_MAX_TEXTURE_SIZE = {}", Integer.valueOf(MAX_SUPPORTED_TEXTURE_SIZE));
    } 
    return MAX_SUPPORTED_TEXTURE_SIZE;
  }
  
  public static void glBindBuffer(int $$0, IntSupplier $$1) {
    GlStateManager._glBindBuffer($$0, $$1.getAsInt());
  }
  
  public static void glBindVertexArray(Supplier<Integer> $$0) {
    GlStateManager._glBindVertexArray(((Integer)$$0.get()).intValue());
  }
  
  public static void glBufferData(int $$0, ByteBuffer $$1, int $$2) {
    assertOnRenderThreadOrInit();
    GlStateManager._glBufferData($$0, $$1, $$2);
  }
  
  public static void glDeleteBuffers(int $$0) {
    assertOnRenderThread();
    GlStateManager._glDeleteBuffers($$0);
  }
  
  public static void glDeleteVertexArrays(int $$0) {
    assertOnRenderThread();
    GlStateManager._glDeleteVertexArrays($$0);
  }
  
  public static void glUniform1i(int $$0, int $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform1i($$0, $$1);
  }
  
  public static void glUniform1(int $$0, IntBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform1($$0, $$1);
  }
  
  public static void glUniform2(int $$0, IntBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform2($$0, $$1);
  }
  
  public static void glUniform3(int $$0, IntBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform3($$0, $$1);
  }
  
  public static void glUniform4(int $$0, IntBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform4($$0, $$1);
  }
  
  public static void glUniform1(int $$0, FloatBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform1($$0, $$1);
  }
  
  public static void glUniform2(int $$0, FloatBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform2($$0, $$1);
  }
  
  public static void glUniform3(int $$0, FloatBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform3($$0, $$1);
  }
  
  public static void glUniform4(int $$0, FloatBuffer $$1) {
    assertOnRenderThread();
    GlStateManager._glUniform4($$0, $$1);
  }
  
  public static void glUniformMatrix2(int $$0, boolean $$1, FloatBuffer $$2) {
    assertOnRenderThread();
    GlStateManager._glUniformMatrix2($$0, $$1, $$2);
  }
  
  public static void glUniformMatrix3(int $$0, boolean $$1, FloatBuffer $$2) {
    assertOnRenderThread();
    GlStateManager._glUniformMatrix3($$0, $$1, $$2);
  }
  
  public static void glUniformMatrix4(int $$0, boolean $$1, FloatBuffer $$2) {
    assertOnRenderThread();
    GlStateManager._glUniformMatrix4($$0, $$1, $$2);
  }
  
  public static void setupOverlayColor(IntSupplier $$0, int $$1) {
    assertOnRenderThread();
    int $$2 = $$0.getAsInt();
    setShaderTexture(1, $$2);
  }
  
  public static void teardownOverlayColor() {
    assertOnRenderThread();
    setShaderTexture(1, 0);
  }
  
  public static void setupLevelDiffuseLighting(k $$0, k $$1, d $$2) {
    assertOnRenderThread();
    GlStateManager.setupLevelDiffuseLighting($$0, $$1, $$2);
  }
  
  public static void setupGuiFlatDiffuseLighting(k $$0, k $$1) {
    assertOnRenderThread();
    GlStateManager.setupGuiFlatDiffuseLighting($$0, $$1);
  }
  
  public static void setupGui3DDiffuseLighting(k $$0, k $$1) {
    assertOnRenderThread();
    GlStateManager.setupGui3DDiffuseLighting($$0, $$1);
  }
  
  public static void beginInitialization() {
    isInInit = true;
  }
  
  public static void finishInitialization() {
    isInInit = false;
    if (!recordingQueue.isEmpty())
      replayQueue(); 
    if (!recordingQueue.isEmpty())
      throw new IllegalStateException("Recorded to render queue during initialization"); 
  }
  
  public static void glGenBuffers(Consumer<Integer> $$0) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> $$0.accept(Integer.valueOf(GlStateManager._glGenBuffers())));
    } else {
      $$0.accept(Integer.valueOf(GlStateManager._glGenBuffers()));
    } 
  }
  
  public static void glGenVertexArrays(Consumer<Integer> $$0) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> $$0.accept(Integer.valueOf(GlStateManager._glGenVertexArrays())));
    } else {
      $$0.accept(Integer.valueOf(GlStateManager._glGenVertexArrays()));
    } 
  }
  
  public static dsl renderThreadTesselator() {
    assertOnRenderThread();
    return RENDER_THREAD_TESSELATOR;
  }
  
  public static void defaultBlendFunc() {
    blendFuncSeparate(GlStateManager.SourceFactor.SRC_ALPHA, GlStateManager.DestFactor.ONE_MINUS_SRC_ALPHA, GlStateManager.SourceFactor.ONE, GlStateManager.DestFactor.ZERO);
  }
  
  @Deprecated
  public static void runAsFancy(Runnable $$0) {
    boolean $$1 = dxo.B();
    if (!$$1) {
      $$0.run();
      return;
    } 
    dxs $$2 = (dxo.D()).l;
    dxi $$3 = $$2.p;
    $$2.p = dxi.b;
    $$0.run();
    $$2.p = $$3;
  }
  
  public static void setShader(Supplier<epw> $$0) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> shader = $$0.get());
    } else {
      shader = $$0.get();
    } 
  }
  
  @Nullable
  public static epw getShader() {
    assertOnRenderThread();
    return shader;
  }
  
  public static int getTextureId(int $$0) {
    return GlStateManager._getTextureId($$0);
  }
  
  public static void setShaderTexture(int $$0, yh $$1) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> _setShaderTexture($$0, $$1));
    } else {
      _setShaderTexture($$0, $$1);
    } 
  }
  
  public static void _setShaderTexture(int $$0, yh $$1) {
    if ($$0 >= 0 && $$0 < shaderTextures.length) {
      ezs $$2 = dxo.D().M();
      ezf $$3 = $$2.b($$1);
      shaderTextures[$$0] = $$3.b();
    } 
  }
  
  public static void setShaderTexture(int $$0, int $$1) {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> _setShaderTexture($$0, $$1));
    } else {
      _setShaderTexture($$0, $$1);
    } 
  }
  
  public static void _setShaderTexture(int $$0, int $$1) {
    if ($$0 >= 0 && $$0 < shaderTextures.length)
      shaderTextures[$$0] = $$1; 
  }
  
  public static int getShaderTexture(int $$0) {
    assertOnRenderThread();
    if ($$0 >= 0 && $$0 < shaderTextures.length)
      return shaderTextures[$$0]; 
    return 0;
  }
  
  public static void setProjectionMatrix(d $$0) {
    d $$1 = $$0.h();
    if (!isOnRenderThread()) {
      recordRenderCall(() -> projectionMatrix = $$0);
    } else {
      projectionMatrix = $$1;
    } 
  }
  
  public static void setInverseViewRotationMatrix(c $$0) {
    c $$1 = $$0.h();
    if (!isOnRenderThread()) {
      recordRenderCall(() -> inverseViewRotationMatrix = $$0);
    } else {
      inverseViewRotationMatrix = $$1;
    } 
  }
  
  public static void setTextureMatrix(d $$0) {
    d $$1 = $$0.h();
    if (!isOnRenderThread()) {
      recordRenderCall(() -> textureMatrix = $$0);
    } else {
      textureMatrix = $$1;
    } 
  }
  
  public static void resetTextureMatrix() {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> textureMatrix.b());
    } else {
      textureMatrix.b();
    } 
  }
  
  public static void applyModelViewMatrix() {
    d $$0 = modelViewStack.c().a().h();
    if (!isOnRenderThread()) {
      recordRenderCall(() -> modelViewMatrix = $$0);
    } else {
      modelViewMatrix = $$0;
    } 
  }
  
  public static void backupProjectionMatrix() {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> _backupProjectionMatrix());
    } else {
      _backupProjectionMatrix();
    } 
  }
  
  private static void _backupProjectionMatrix() {
    savedProjectionMatrix = projectionMatrix;
  }
  
  public static void restoreProjectionMatrix() {
    if (!isOnRenderThread()) {
      recordRenderCall(() -> _restoreProjectionMatrix());
    } else {
      _restoreProjectionMatrix();
    } 
  }
  
  private static void _restoreProjectionMatrix() {
    projectionMatrix = savedProjectionMatrix;
  }
  
  public static d getProjectionMatrix() {
    assertOnRenderThread();
    return projectionMatrix;
  }
  
  public static c getInverseViewRotationMatrix() {
    assertOnRenderThread();
    return inverseViewRotationMatrix;
  }
  
  public static d getModelViewMatrix() {
    assertOnRenderThread();
    return modelViewMatrix;
  }
  
  public static dsj getModelViewStack() {
    return modelViewStack;
  }
  
  public static d getTextureMatrix() {
    assertOnRenderThread();
    return textureMatrix;
  }
  
  public static a getSequentialBuffer(dso.b $$0, int $$1) {
    a $$4;
    assertOnRenderThread();
    if ($$0 == dso.b.h) {
      a $$2 = sharedSequentialQuad;
    } else if ($$0 == dso.b.a) {
      a $$3 = sharedSequentialLines;
    } else {
      $$4 = sharedSequential;
    } 
    $$4.a($$1);
    return $$4;
  }
  
  public static void setShaderGameTime(long $$0, float $$1) {
    float $$2 = ((float)($$0 % 24000L) + $$1) / 24000.0F;
    if (!isOnRenderThread()) {
      recordRenderCall(() -> shaderGameTime = $$0);
    } else {
      shaderGameTime = $$2;
    } 
  }
  
  public static float getShaderGameTime() {
    assertOnRenderThread();
    return shaderGameTime;
  }
  
  public static final class a {
    private final int a;
    
    private final int b;
    
    private final a c;
    
    private int d;
    
    private dso.a e = dso.a.a;
    
    private int f;
    
    a(int $$0, int $$1, a $$2) {
      this.a = $$0;
      this.b = $$1;
      this.c = $$2;
    }
    
    void a(int $$0) {
      if ($$0 <= this.f)
        return; 
      $$0 = aiy.d($$0 * 2, this.b);
      RenderSystem.LOGGER.debug("Growing IndexBuffer: Old limit {}, new limit {}.", Integer.valueOf(this.f), Integer.valueOf($$0));
      if (this.d == 0)
        this.d = GlStateManager._glGenBuffers(); 
      dso.a $$1 = dso.a.a($$0);
      int $$2 = aiy.d($$0 * $$1.e, 4);
      GlStateManager._glBindBuffer(34963, this.d);
      GlStateManager._glBufferData(34963, $$2, 35048);
      ByteBuffer $$3 = GlStateManager._glMapBuffer(34963, 35001);
      if ($$3 == null)
        throw new RuntimeException("Failed to map GL buffer"); 
      this.e = $$1;
      IntConsumer $$4 = a($$3);
      int $$5;
      for ($$5 = 0; $$5 < $$0; $$5 += this.b)
        this.c.accept($$4, $$5 * this.a / this.b); 
      GlStateManager._glUnmapBuffer(34963);
      GlStateManager._glBindBuffer(34963, 0);
      this.f = $$0;
      dsf.b();
    }
    
    private IntConsumer a(ByteBuffer $$0) {
      switch (RenderSystem.null.a[this.e.ordinal()]) {
        case 1:
          return $$1 -> $$0.put((byte)$$1);
        case 2:
          return $$1 -> $$0.putShort((short)$$1);
      } 
      Objects.requireNonNull($$0);
      return $$0::putInt;
    }
    
    public int a() {
      return this.d;
    }
    
    public dso.a b() {
      return this.e;
    }
    
    private static interface a {
      void accept(IntConsumer param2IntConsumer, int param2Int);
    }
  }
  
  private static interface a {
    void accept(IntConsumer param1IntConsumer, int param1Int);
  }
}

import com.google.common.collect.ImmutableList;
import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import java.util.Collection;

public class aaj {
  public static void a(CommandDispatcher<dm> $$0) {
    $$0.register(
        (LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)dn.a("kill")
        .requires($$0 -> $$0.c(2)))
        .executes($$0 -> a((dm)$$0.getSource(), (Collection<? extends awt>)ImmutableList.of(((dm)$$0.getSource()).g()))))
        .then(
          dn.<T>a("targets", dw.b())
          .executes($$0 -> a((dm)$$0.getSource(), dw.b($$0, "targets")))));
  }
  
  private static int a(dm $$0, Collection<? extends awt> $$1) {
    for (awt $$2 : $$1)
      $$2.ag(); 
    if ($$1.size() == 1) {
      $$0.a(new qn("commands.kill.success.single", new Object[] { ((awt)$$1.iterator().next()).C_() }), true);
    } else {
      $$0.a(new qn("commands.kill.success.multiple", new Object[] { Integer.valueOf($$1.size()) }), true);
    } 
    return $$1.size();
  }
}

import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.google.common.collect.UnmodifiableIterator;
import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.arguments.ArgumentType;
import com.mojang.brigadier.arguments.BoolArgumentType;
import com.mojang.brigadier.arguments.IntegerArgumentType;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.builder.RequiredArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.datafixers.util.Either;
import com.mojang.datafixers.util.Unit;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class aaz {
  private static final Logger a = LogManager.getLogger();
  
  public static void a(CommandDispatcher<dm> $$0) {
    $$0.register(
        (LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)dn.a("resetchunks")
        .requires($$0 -> $$0.c(2)))
        .executes($$0 -> a((dm)$$0.getSource(), 0, true)))
        .then((
          (RequiredArgumentBuilder)dn.<T>a("range", (ArgumentType<T>)IntegerArgumentType.integer(0, 5))
          .executes($$0 -> a((dm)$$0.getSource(), IntegerArgumentType.getInteger($$0, "range"), true)))
          .then(
            dn.<T>a("skipOldChunks", (ArgumentType<T>)BoolArgumentType.bool())
            .executes($$0 -> a((dm)$$0.getSource(), IntegerArgumentType.getInteger($$0, "range"), BoolArgumentType.getBool($$0, "skipOldChunks"))))));
  }
  
  private static int a(dm $$0, int $$1, boolean $$2) {
    adi $$3 = $$0.e();
    adg $$4 = $$3.k();
    $$4.a.b();
    dom $$5 = $$0.d();
    bzk $$6 = new bzk(new gh($$5));
    int $$7 = $$6.d - $$1;
    int $$8 = $$6.d + $$1;
    int $$9 = $$6.c - $$1;
    int $$10 = $$6.c + $$1;
    for (int $$11 = $$7; $$11 <= $$8; $$11++) {
      for (int $$12 = $$9; $$12 <= $$10; $$12++) {
        bzk $$13 = new bzk($$12, $$11);
        cqi $$14 = $$4.a($$12, $$11, false);
        if ($$14 != null && (!$$2 || !$$14.s()))
          for (gh $$15 : gh.b($$13.d(), $$3.u_(), $$13.e(), $$13.f(), $$3.ag() - 1, $$13.g()))
            $$3.a($$15, ccz.a.n(), 16);  
      } 
    } 
    auk<Runnable> $$16 = auk.a(ad.g(), "worldgen-resetchunks");
    long $$17 = System.currentTimeMillis();
    int $$18 = ($$1 * 2 + 1) * ($$1 * 2 + 1);
    for (UnmodifiableIterator<cqb> unmodifiableIterator = ImmutableList.of(cqb.f, cqb.g, cqb.h, cqb.i, cqb.j, cqb.k).iterator(); unmodifiableIterator.hasNext(); ) {
      cqb $$19 = unmodifiableIterator.next();
      long $$20 = System.currentTimeMillis();
      Objects.requireNonNull($$16);
      CompletableFuture<Unit> $$21 = CompletableFuture.supplyAsync(() -> Unit.INSTANCE, $$16::a);
      for (int $$22 = $$6.d - $$1; $$22 <= $$6.d + $$1; $$22++) {
        for (int $$23 = $$6.c - $$1; $$23 <= $$6.c + $$1; $$23++) {
          bzk $$24 = new bzk($$23, $$22);
          cqi $$25 = $$4.a($$23, $$22, false);
          if ($$25 != null && (!$$2 || !$$25.s())) {
            List<cpy> $$26 = Lists.newArrayList();
            int $$27 = Math.max(1, $$19.f());
            for (int $$28 = $$24.d - $$27; $$28 <= $$24.d + $$27; $$28++) {
              for (int $$29 = $$24.c - $$27; $$29 <= $$24.c + $$27; $$29++) {
                cpy $$33, $$30 = $$4.a($$29, $$28, $$19.e(), true);
                if ($$30 instanceof cqh) {
                  cpy $$31 = new cqh(((cqh)$$30).A(), true);
                } else if ($$30 instanceof cqi) {
                  cpy $$32 = new cqh((cqi)$$30, true);
                } else {
                  $$33 = $$30;
                } 
                $$26.add($$33);
              } 
            } 
            Objects.requireNonNull($$16);
            $$21 = $$21.thenComposeAsync($$5 -> {
                  Objects.requireNonNull($$1);
                  return $$0.a($$1::a, $$2, $$3.g(), $$2.p(), $$3.a(), (), $$4, true).thenApply(());
                }$$16::a);
          } 
        } 
      } 
      Objects.requireNonNull($$21);
      $$0.j().c($$21::isDone);
      a.debug($$19.d() + " took " + $$19.d() + " ms");
    } 
    long $$34 = System.currentTimeMillis();
    for (int $$35 = $$6.d - $$1; $$35 <= $$6.d + $$1; $$35++) {
      for (int $$36 = $$6.c - $$1; $$36 <= $$6.c + $$1; $$36++) {
        bzk $$37 = new bzk($$36, $$35);
        cqi $$38 = $$4.a($$36, $$35, false);
        if ($$38 != null && (!$$2 || !$$38.s()))
          for (gh $$39 : gh.b($$37.d(), $$3.u_(), $$37.e(), $$37.f(), $$3.ag() - 1, $$37.g()))
            $$4.a($$39);  
      } 
    } 
    a.debug("blockChanged took " + System.currentTimeMillis() - $$34 + " ms");
    long $$40 = System.currentTimeMillis() - $$17;
    $$0.a(new qm(String.format("%d chunks have been reset. This took %d ms for %d chunks, or %02f ms per chunk", new Object[] { Integer.valueOf($$18), Long.valueOf($$40), Integer.valueOf($$18), Float.valueOf((float)$$40 / $$18) })), true);
    return 1;
  }
}

import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.builder.RequiredArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.brigadier.exceptions.SimpleCommandExceptionType;
import java.util.function.Predicate;
import javax.annotation.Nullable;

public class abh {
  private static final SimpleCommandExceptionType a = new SimpleCommandExceptionType(new qn("commands.setblock.failed"));
  
  public static void a(CommandDispatcher<dm> $$0) {
    $$0.register(
        (LiteralArgumentBuilder)((LiteralArgumentBuilder)dn.a("setblock")
        .requires($$0 -> $$0.c(2)))
        .then(
          dn.<T>a("pos", ev.a())
          .then((
            (RequiredArgumentBuilder)((RequiredArgumentBuilder)((RequiredArgumentBuilder)dn.<T>a("block", es.a())
            .executes($$0 -> a((dm)$$0.getSource(), ev.a($$0, "pos"), es.a($$0, "block"), b.a, null)))
            .then(
              dn.a("destroy")
              .executes($$0 -> a((dm)$$0.getSource(), ev.a($$0, "pos"), es.a($$0, "block"), b.b, null))))
            
            .then(
              dn.a("keep")
              .executes($$0 -> a((dm)$$0.getSource(), ev.a($$0, "pos"), es.a($$0, "block"), b.a, ()))))
            
            .then(
              dn.a("replace")
              .executes($$0 -> a((dm)$$0.getSource(), ev.a($$0, "pos"), es.a($$0, "block"), b.a, null))))));
  }
  
  private static int a(dm $$0, gh $$1, eq $$2, b $$3, @Nullable Predicate<cog> $$4) throws CommandSyntaxException {
    boolean $$8;
    adi $$5 = $$0.e();
    if ($$4 != null && !$$4.test(new cog($$5, $$1, true)))
      throw a.create(); 
    if ($$3 == b.b) {
      $$5.b($$1, true);
      boolean $$6 = (!$$2.a().g() || !$$5.a_($$1).g());
    } else {
      clz $$7 = $$5.c_($$1);
      avh.a($$7);
      $$8 = true;
    } 
    if ($$8 && !$$2.a($$5, $$1, 2))
      throw a.create(); 
    $$5.a($$1, $$2.a().b());
    $$0.a(new qn("commands.setblock.success", new Object[] { Integer.valueOf($$1.u()), Integer.valueOf($$1.v()), Integer.valueOf($$1.w()) }), true);
    return 1;
  }
  
  public enum b {
    a, b;
  }
  
  public static interface a {
    @Nullable
    eq filter(deh param1deh, gh param1gh, eq param1eq, adi param1adi);
  }
}

import com.mojang.authlib.GameProfile;
import com.mojang.brigadier.CommandDispatcher;
import com.mojang.brigadier.builder.LiteralArgumentBuilder;
import com.mojang.brigadier.context.CommandContext;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.brigadier.exceptions.SimpleCommandExceptionType;
import com.mojang.brigadier.suggestion.SuggestionsBuilder;
import java.util.Collection;
import java.util.concurrent.CompletableFuture;

public class abz {
  private static final SimpleCommandExceptionType a = new SimpleCommandExceptionType(new qn("commands.whitelist.alreadyOn"));
  
  private static final SimpleCommandExceptionType b = new SimpleCommandExceptionType(new qn("commands.whitelist.alreadyOff"));
  
  private static final SimpleCommandExceptionType c = new SimpleCommandExceptionType(new qn("commands.whitelist.add.failed"));
  
  private static final SimpleCommandExceptionType d = new SimpleCommandExceptionType(new qn("commands.whitelist.remove.failed"));
  
  public static void a(CommandDispatcher<dm> $$0) {
    $$0.register(
        (LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)((LiteralArgumentBuilder)dn.a("whitelist")
        .requires($$0 -> $$0.c(3)))
        .then(
          dn.a("on")
          .executes($$0 -> b((dm)$$0.getSource()))))
        
        .then(
          dn.a("off")
          .executes($$0 -> c((dm)$$0.getSource()))))
        
        .then(
          dn.a("list")
          .executes($$0 -> d((dm)$$0.getSource()))))
        
        .then(
          dn.a("add")
          .then(
            dn.<T>a("targets", dy.a())
            .suggests(($$0, $$1) -> {
                afy $$2 = ((dm)$$0.getSource()).j().ac();
                return dp.b($$2.t().stream().filter(()).map(()), $$1);
              }).executes($$0 -> a((dm)$$0.getSource(), dy.a($$0, "targets"))))))
        
        .then(
          dn.a("remove")
          .then(
            dn.<T>a("targets", dy.a())
            .suggests(($$0, $$1) -> dp.a(((dm)$$0.getSource()).j().ac().j(), $$1))
            .executes($$0 -> b((dm)$$0.getSource(), dy.a($$0, "targets"))))))
        
        .then(
          dn.a("reload")
          .executes($$0 -> a((dm)$$0.getSource()))));
  }
  
  private static int a(dm $$0) {
    $$0.j().ac().a();
    $$0.a(new qn("commands.whitelist.reloaded"), true);
    $$0.j().a($$0);
    return 1;
  }
  
  private static int a(dm $$0, Collection<GameProfile> $$1) throws CommandSyntaxException {
    agg $$2 = $$0.j().ac().i();
    int $$3 = 0;
    for (GameProfile $$4 : $$1) {
      if (!$$2.a($$4)) {
        agh $$5 = new agh($$4);
        $$2.a($$5);
        $$0.a(new qn("commands.whitelist.add.success", new Object[] { qa.a($$4) }), true);
        $$3++;
      } 
    } 
    if ($$3 == 0)
      throw c.create(); 
    return $$3;
  }
  
  private static int b(dm $$0, Collection<GameProfile> $$1) throws CommandSyntaxException {
    agg $$2 = $$0.j().ac().i();
    int $$3 = 0;
    for (GameProfile $$4 : $$1) {
      if ($$2.a($$4)) {
        agh $$5 = new agh($$4);
        $$2.b($$5);
        $$0.a(new qn("commands.whitelist.remove.success", new Object[] { qa.a($$4) }), true);
        $$3++;
      } 
    } 
    if ($$3 == 0)
      throw d.create(); 
    $$0.j().a($$0);
    return $$3;
  }
  
  private static int b(dm $$0) throws CommandSyntaxException {
    afy $$1 = $$0.j().ac();
    if ($$1.o())
      throw a.create(); 
    $$1.a(true);
    $$0.a(new qn("commands.whitelist.enabled"), true);
    $$0.j().a($$0);
    return 1;
  }
  
  private static int c(dm $$0) throws CommandSyntaxException {
    afy $$1 = $$0.j().ac();
    if (!$$1.o())
      throw b.create(); 
    $$1.a(false);
    $$0.a(new qn("commands.whitelist.disabled"), true);
    return 1;
  }
  
  private static int d(dm $$0) {
    String[] $$1 = $$0.j().ac().j();
    if ($$1.length == 0) {
      $$0.a(new qn("commands.whitelist.none"), false);
    } else {
      $$0.a(new qn("commands.whitelist.list", new Object[] { Integer.valueOf($$1.length), String.join(", ", (CharSequence[])$$1) }), false);
    } 
    return $$1.length;
  }
}

import com.google.common.collect.Lists;
import com.mojang.datafixers.util.Pair;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.function.Consumer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class adh {
  private static final Logger a = LogManager.getLogger();
  
  private static final int b = 1;
  
  private final adi c;
  
  private final awt d;
  
  private final int e;
  
  private final boolean f;
  
  private final Consumer<qr<?>> g;
  
  private long h;
  
  private long i;
  
  private long j;
  
  private int k;
  
  private int l;
  
  private int m;
  
  private dom n = dom.a;
  
  private int o;
  
  private int p;
  
  private List<awt> q = Collections.emptyList();
  
  private boolean r;
  
  private boolean s;
  
  public adh(adi $$0, awt $$1, int $$2, boolean $$3, Consumer<qr<?>> $$4) {
    this.c = $$0;
    this.g = $$4;
    this.d = $$1;
    this.e = $$2;
    this.f = $$3;
    d();
    this.k = aiy.d($$1.dm() * 256.0F / 360.0F);
    this.l = aiy.d($$1.dn() * 256.0F / 360.0F);
    this.m = aiy.d($$1.ce() * 256.0F / 360.0F);
    this.s = $$1.aw();
  }
  
  public void a() {
    List<awt> $$0 = this.d.cF();
    if (!$$0.equals(this.q)) {
      this.q = $$0;
      this.g.accept(new ub(this.d));
    } 
    if (this.d instanceof bkk && this.o % 10 == 0) {
      bkk $$1 = (bkk)this.d;
      bue $$2 = $$1.x();
      if ($$2.c() instanceof buk) {
        Integer $$3 = buk.d($$2);
        djd $$4 = buk.a($$3, this.c);
        if ($$4 != null)
          for (adj $$5 : this.c.z()) {
            $$4.a($$5, $$2);
            qr<?> $$6 = $$4.a($$3.intValue(), $$5);
            if ($$6 != null)
              $$5.b.a($$6); 
          }  
      } 
      c();
    } 
    if (this.o % this.e == 0 || this.d.ag || this.d.ai().a()) {
      if (this.d.bF()) {
        int $$7 = aiy.d(this.d.dm() * 256.0F / 360.0F);
        int $$8 = aiy.d(this.d.dn() * 256.0F / 360.0F);
        boolean $$9 = (Math.abs($$7 - this.k) >= 1 || Math.abs($$8 - this.l) >= 1);
        if ($$9) {
          this.g.accept(new sm.c(this.d.ae(), (byte)$$7, (byte)$$8, this.d.aw()));
          this.k = $$7;
          this.l = $$8;
        } 
        d();
        c();
        this.r = true;
      } else {
        this.p++;
        int $$10 = aiy.d(this.d.dm() * 256.0F / 360.0F);
        int $$11 = aiy.d(this.d.dn() * 256.0F / 360.0F);
        dom $$12 = this.d.cV().d(sm.a(this.h, this.i, this.j));
        boolean $$13 = ($$12.g() >= 7.62939453125E-6D);
        qr<?> $$14 = null;
        boolean $$15 = ($$13 || this.o % 60 == 0);
        boolean $$16 = (Math.abs($$10 - this.k) >= 1 || Math.abs($$11 - this.l) >= 1);
        if (this.o > 0 || this.d instanceof bnv) {
          long $$17 = sm.a($$12.b);
          long $$18 = sm.a($$12.c);
          long $$19 = sm.a($$12.d);
          boolean $$20 = ($$17 < -32768L || $$17 > 32767L || $$18 < -32768L || $$18 > 32767L || $$19 < -32768L || $$19 > 32767L);
          if ($$20 || this.p > 400 || this.r || this.s != this.d.aw()) {
            this.s = this.d.aw();
            this.p = 0;
            $$14 = new up(this.d);
          } else if (($$15 && $$16) || this.d instanceof bnv) {
            $$14 = new sm.b(this.d.ae(), (short)(int)$$17, (short)(int)$$18, (short)(int)$$19, (byte)$$10, (byte)$$11, this.d.aw());
          } else if ($$15) {
            $$14 = new sm.a(this.d.ae(), (short)(int)$$17, (short)(int)$$18, (short)(int)$$19, this.d.aw());
          } else if ($$16) {
            $$14 = new sm.c(this.d.ae(), (byte)$$10, (byte)$$11, this.d.aw());
          } 
        } 
        if ((this.f || this.d.ag || (this.d instanceof axh && ((axh)this.d).eU())) && this.o > 0) {
          dom $$21 = this.d.da();
          double $$22 = $$21.g(this.n);
          if ($$22 > 1.0E-7D || ($$22 > 0.0D && $$21.g() == 0.0D)) {
            this.n = $$21;
            this.g.accept(new tw(this.d.ae(), this.n));
          } 
        } 
        if ($$14 != null)
          this.g.accept($$14); 
        c();
        if ($$15)
          d(); 
        if ($$16) {
          this.k = $$10;
          this.l = $$11;
        } 
        this.r = false;
      } 
      int $$23 = aiy.d(this.d.ce() * 256.0F / 360.0F);
      if (Math.abs($$23 - this.m) >= 1) {
        this.g.accept(new tf(this.d, (byte)$$23));
        this.m = $$23;
      } 
      this.d.ag = false;
    } 
    this.o++;
    if (this.d.D) {
      a(new tw(this.d));
      this.d.D = false;
    } 
  }
  
  public void a(adj $$0) {
    this.d.d($$0);
    $$0.b.a(new tb(new int[] { this.d.ae() }));
  }
  
  public void b(adj $$0) {
    Objects.requireNonNull($$0.b);
    a($$0.b::a);
    this.d.c($$0);
  }
  
  public void a(Consumer<qr<?>> $$0) {
    if (this.d.do())
      a.warn("Fetching packet for removed entity {}", this.d); 
    qr<?> $$1 = this.d.S();
    this.m = aiy.d(this.d.ce() * 256.0F / 360.0F);
    $$0.accept($$1);
    if (!this.d.ai().d())
      $$0.accept(new tu(this.d.ae(), this.d.ai(), true)); 
    boolean $$2 = this.f;
    if (this.d instanceof axh) {
      Collection<aye> $$3 = ((axh)this.d).ep().b();
      if (!$$3.isEmpty())
        $$0.accept(new ur(this.d.ae(), $$3)); 
      if (((axh)this.d).eU())
        $$2 = true; 
    } 
    this.n = this.d.da();
    if ($$2 && !($$1 instanceof qx))
      $$0.accept(new tw(this.d.ae(), this.n)); 
    if (this.d instanceof axh) {
      List<Pair<awy, bue>> $$4 = Lists.newArrayList();
      for (awy $$5 : awy.values()) {
        bue $$6 = ((axh)this.d).b($$5);
        if (!$$6.b())
          $$4.add(Pair.of($$5, $$6.m())); 
      } 
      if (!$$4.isEmpty())
        $$0.accept(new tx(this.d.ae(), $$4)); 
    } 
    if (this.d instanceof axh) {
      axh $$7 = (axh)this.d;
      for (awn $$8 : $$7.dW())
        $$0.accept(new us(this.d.ae(), $$8)); 
    } 
    if (!this.d.cF().isEmpty())
      $$0.accept(new ub(this.d)); 
    if (this.d.bF())
      $$0.accept(new ub(this.d.cN())); 
    if (this.d instanceof axj) {
      axj $$9 = (axj)this.d;
      if ($$9.fp())
        $$0.accept(new tv($$9, $$9.fq())); 
    } 
  }
  
  private void c() {
    xs $$0 = this.d.ai();
    if ($$0.a())
      a(new tu(this.d.ae(), $$0, false)); 
    if (this.d instanceof axh) {
      Set<aye> $$1 = ((axh)this.d).ep().a();
      if (!$$1.isEmpty())
        a(new ur(this.d.ae(), $$1)); 
      $$1.clear();
    } 
  }
  
  private void d() {
    this.h = sm.a(this.d.dc());
    this.i = sm.a(this.d.de());
    this.j = sm.a(this.d.di());
  }
  
  public dom b() {
    return sm.a(this.h, this.i, this.j);
  }
  
  private void a(qr<?> $$0) {
    this.g.accept($$0);
    if (this.d instanceof adj)
      ((adj)this.d).b.a($$0); 
  }
}

package net.minecraft.data;

import ab;
import ae;
import iy;
import iz;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.stream.Collectors;
import jb;
import ji;
import jj;
import jk;
import jl;
import jm;
import joptsimple.AbstractOptionSpec;
import joptsimple.ArgumentAcceptingOptionSpec;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
import joptsimple.OptionSpec;
import joptsimple.OptionSpecBuilder;
import jt;
import jy;
import kv;
import ld;
import le;
import lf;
import lh;
import li;
import lj;
import lk;
import ll;
import lm;
import ln;
import lo;
import lp;
import lq;
import lr;
import ls;
import lt;
import lv;
import net.minecraft.obfuscate.DontObfuscate;

public class Main {
  @DontObfuscate
  public static void main(String[] $$0) throws IOException {
    ab.a();
    OptionParser $$1 = new OptionParser();
    AbstractOptionSpec abstractOptionSpec = $$1.accepts("help", "Show the help menu").forHelp();
    OptionSpecBuilder optionSpecBuilder1 = $$1.accepts("server", "Include server generators");
    OptionSpecBuilder optionSpecBuilder2 = $$1.accepts("client", "Include client generators");
    OptionSpecBuilder optionSpecBuilder3 = $$1.accepts("dev", "Include development tools");
    OptionSpecBuilder optionSpecBuilder4 = $$1.accepts("reports", "Include data reports");
    OptionSpecBuilder optionSpecBuilder5 = $$1.accepts("validate", "Validate inputs");
    OptionSpecBuilder optionSpecBuilder6 = $$1.accepts("all", "Include all generators");
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec1 = $$1.accepts("output", "Output folder").withRequiredArg().defaultsTo("generated", (Object[])new String[0]);
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec2 = $$1.accepts("input", "Input folder").withRequiredArg();
    OptionSet $$11 = $$1.parse($$0);
    if ($$11.has((OptionSpec)abstractOptionSpec) || !$$11.hasOptions()) {
      $$1.printHelpOn(System.out);
      return;
    } 
    Path $$12 = Paths.get((String)argumentAcceptingOptionSpec1.value($$11), new String[0]);
    boolean $$13 = $$11.has((OptionSpec)optionSpecBuilder6);
    boolean $$14 = ($$13 || $$11.has((OptionSpec)optionSpecBuilder2));
    boolean $$15 = ($$13 || $$11.has((OptionSpec)optionSpecBuilder1));
    boolean $$16 = ($$13 || $$11.has((OptionSpec)optionSpecBuilder3));
    boolean $$17 = ($$13 || $$11.has((OptionSpec)optionSpecBuilder4));
    boolean $$18 = ($$13 || $$11.has((OptionSpec)optionSpecBuilder5));
    iy $$19 = a($$12, (Collection<Path>)$$11.valuesOf((OptionSpec)argumentAcceptingOptionSpec2).stream().map($$0 -> Paths.get($$0, new String[0])).collect(Collectors.toList()), $$14, $$15, $$16, $$17, $$18, ab.b(), true);
    $$19.c();
  }
  
  public static iy a(Path $$0, Collection<Path> $$1, boolean $$2, boolean $$3, boolean $$4, boolean $$5, boolean $$6, ae $$7, boolean $$8) {
    iy $$9 = new iy($$0, $$1, $$7, $$8);
    $$9.a(($$2 || $$3), (iz)(new le($$9))
        .a((le.a)new lf()));
    $$9.a($$2, (iz)new jy($$9));
    $$9.a($$3, (iz)new jb($$9));
    $$9.a($$3, (iz)new jt($$9));
    $$9.a($$3, (iz)new kv($$9));
    lj $$10 = new lj($$9);
    $$9.a($$3, (iz)$$10);
    $$9.a($$3, (iz)new lq($$9, $$10));
    $$9.a($$3, (iz)new lh($$9));
    $$9.a($$3, (iz)new li($$9));
    $$9.a($$3, (iz)new lk($$9));
    $$9.a($$3, (iz)new ll($$9));
    $$9.a($$3, (iz)new lm($$9));
    $$9.a($$3, (iz)new ln($$9));
    $$9.a($$3, (iz)new lo($$9));
    $$9.a($$3, (iz)new lp($$9));
    $$9.a($$3, (iz)new lr($$9));
    $$9.a($$3, (iz)new ls($$9));
    $$9.a($$3, (iz)new lt($$9));
    $$9.a($$3, (iz)new lv($$9));
    $$9.a($$4, (iz)new ld($$9));
    $$9.a($$5, (iz)new ji($$9));
    $$9.a($$5, (iz)new jj($$9));
    $$9.a($$5, (iz)new jk($$9));
    $$9.a($$5, (iz)new jl($$9));
    $$9.a($$5, (iz)new jm($$9));
    return $$9;
  }
}

package net.minecraft.server;

import aag;
import aal;
import aap;
import aaz;
import ab;
import abb;
import abc;
import ad;
import aep;
import aeq;
import aer;
import afy;
import agu;
import ahd;
import ahg;
import ahh;
import ahi;
import ahj;
import ahu;
import alp;
import amp;
import awg;
import awi;
import aza;
import cfo;
import cfw;
import cge;
import com.mojang.authlib.GameProfile;
import com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService;
import com.mojang.datafixers.DataFixer;
import com.mojang.datafixers.util.Pair;
import com.mojang.logging.LogUtils;
import com.mojang.serialization.DynamicOps;
import com.mojang.serialization.Lifecycle;
import dap;
import djv;
import dqr;
import dqt;
import dqu;
import dqx;
import dqz;
import ds;
import hn;
import java.awt.GraphicsEnvironment;
import java.io.File;
import java.net.Proxy;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.function.BooleanSupplier;
import joptsimple.AbstractOptionSpec;
import joptsimple.ArgumentAcceptingOptionSpec;
import joptsimple.NonOptionArgumentSpec;
import joptsimple.OptionParser;
import joptsimple.OptionSet;
import joptsimple.OptionSpec;
import joptsimple.OptionSpecBuilder;
import net.minecraft.obfuscate.DontObfuscate;
import org.slf4j.Logger;
import pu;
import q;
import rm;
import t;

public class Main {
  private static final Logger a = LogUtils.getLogger();
  
  @DontObfuscate
  public static void main(String[] $$0) {
    ab.a();
    OptionParser $$1 = new OptionParser();
    OptionSpecBuilder optionSpecBuilder1 = $$1.accepts("nogui");
    OptionSpecBuilder optionSpecBuilder2 = $$1.accepts("initSettings", "Initializes 'server.properties' and 'eula.txt', then quits");
    OptionSpecBuilder optionSpecBuilder3 = $$1.accepts("demo");
    OptionSpecBuilder optionSpecBuilder4 = $$1.accepts("bonusChest");
    OptionSpecBuilder optionSpecBuilder5 = $$1.accepts("forceUpgrade");
    OptionSpecBuilder optionSpecBuilder6 = $$1.accepts("eraseCache");
    OptionSpecBuilder optionSpecBuilder7 = $$1.accepts("safeMode", "Loads level with vanilla datapack only");
    AbstractOptionSpec abstractOptionSpec = $$1.accepts("help").forHelp();
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec1 = $$1.accepts("singleplayer").withRequiredArg();
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec2 = $$1.accepts("universe").withRequiredArg().defaultsTo(".", (Object[])new String[0]);
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec3 = $$1.accepts("world").withRequiredArg();
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec4 = $$1.accepts("port").withRequiredArg().ofType(Integer.class).defaultsTo(Integer.valueOf(-1), (Object[])new Integer[0]);
    ArgumentAcceptingOptionSpec argumentAcceptingOptionSpec5 = $$1.accepts("serverId").withRequiredArg();
    OptionSpecBuilder optionSpecBuilder8 = $$1.accepts("jfrProfile");
    NonOptionArgumentSpec nonOptionArgumentSpec = $$1.nonOptions();
    try {
      abc $$33;
      OptionSet $$17 = $$1.parse($$0);
      if ($$17.has((OptionSpec)abstractOptionSpec)) {
        $$1.printHelpOn(System.err);
        return;
      } 
      q.h();
      if ($$17.has((OptionSpec)optionSpecBuilder8))
        awi.e.a(awg.b); 
      aal.a();
      aal.c();
      ad.l();
      Path $$18 = Paths.get("server.properties", new String[0]);
      aer $$19 = new aer($$18);
      $$19.b();
      Path $$20 = Paths.get("eula.txt", new String[0]);
      aap $$21 = new aap($$20);
      if ($$17.has((OptionSpec)optionSpecBuilder2)) {
        a.info("Initialized '{}' and '{}'", $$18.toAbsolutePath(), $$20.toAbsolutePath());
        return;
      } 
      if (!$$21.a()) {
        a.info("You need to agree to the EULA in order to run the server. Go to eula.txt for more info.");
        return;
      } 
      File $$22 = new File((String)$$17.valueOf((OptionSpec)argumentAcceptingOptionSpec2));
      aaz $$23 = aaz.a(new YggdrasilAuthenticationService(Proxy.NO_PROXY), $$22);
      String $$24 = Optional.<String>ofNullable((String)$$17.valueOf((OptionSpec)argumentAcceptingOptionSpec3)).orElse(($$19.a()).m);
      dqt $$25 = dqt.a($$22.toPath());
      dqt.c $$26 = $$25.c($$24);
      dqu $$27 = $$26.c();
      if ($$27 != null) {
        if ($$27.d()) {
          a.info("This world must be opened in an older version (like 1.6.4) to be safely converted");
          return;
        } 
        if (!$$27.q()) {
          a.info("This world was created by an incompatible version.");
          return;
        } 
      } 
      boolean $$28 = $$17.has((OptionSpec)optionSpecBuilder7);
      if ($$28)
        a.warn("Safe mode active, only vanilla datapack will be loaded"); 
      ahg $$29 = new ahg(agu.b, new ahi[] { (ahi)new ahj(), (ahi)new ahd($$26.a(dqr.j).toFile(), ahh.c) });
      try {
        cfo $$30 = Objects.<cfo>requireNonNullElse($$26.d(), cfo.a);
        abb.b $$31 = new abb.b($$29, $$30, $$28);
        abb.a $$32 = new abb.a($$31, ds.a.b, ($$19.a()).B);
        $$33 = ad.b($$6 -> abc.a($$0, (), ad.f(), $$6)).get();
      } catch (Exception $$34) {
        a.warn("Failed to load datapacks, can't proceed with server load. You can either fix your datapacks or reset to vanilla with --safeMode", $$34);
        return;
      } 
      hn.a $$36 = $$33.c();
      $$19.a().a((hn)$$36);
      dqz $$37 = $$33.d();
      if ($$17.has((OptionSpec)optionSpecBuilder5))
        a($$26, amp.a(), $$17.has((OptionSpec)optionSpecBuilder6), () -> true, $$37.A()); 
      $$26.a((hn)$$36, $$37);
      aep $$38 = MinecraftServer.<aep>a($$12 -> {
            aep $$13 = new aep($$12, $$0, $$1, $$2, $$3, amp.a(), $$4, afz::new);
            $$13.b($$5.has($$6) ? new GameProfile(null, (String)$$5.valueOf($$6)) : null);
            $$13.a(((Integer)$$5.valueOf($$7)).intValue());
            $$13.c($$5.has($$8));
            $$13.b((String)$$5.valueOf($$9));
            boolean $$14 = (!$$5.has($$10) && !$$5.valuesOf($$11).contains("nogui"));
            if ($$14 && !GraphicsEnvironment.isHeadless())
              $$13.bi(); 
            return $$13;
          });
      Thread $$39 = new Thread("Server Shutdown Thread", $$38) {
          public void run() {
            this.a.a(true);
          }
        };
      $$39.setUncaughtExceptionHandler((Thread.UncaughtExceptionHandler)new t(a));
      Runtime.getRuntime().addShutdownHook($$39);
    } catch (Exception $$40) {
      a.error(LogUtils.FATAL_MARKER, "Failed to start the minecraft server", $$40);
    } 
  }
  
  private static void a(dqt.c $$0, DataFixer $$1, boolean $$2, BooleanSupplier $$3, dap $$4) {
    a.info("Forcing world upgrade!");
    aza $$5 = new aza($$0, $$1, $$4, $$2);
    rm $$6 = null;
    while (!$$5.b()) {
      rm $$7 = $$5.h();
      if ($$6 != $$7) {
        $$6 = $$7;
        a.info($$5.h().getString());
      } 
      int $$8 = $$5.e();
      if ($$8 > 0) {
        int $$9 = $$5.f() + $$5.g();
        a.info("{}% completed ({} / {} chunks)...", new Object[] { Integer.valueOf(alp.d($$9 / $$8 * 100.0F)), Integer.valueOf($$9), Integer.valueOf($$8) });
      } 
      if (!$$3.getAsBoolean()) {
        $$5.a();
        continue;
      } 
      try {
        Thread.sleep(1000L);
      } catch (InterruptedException interruptedException) {}
    } 
  }
}

package net.minecraft.server;

import aas;
import ahl;

final class a extends Record implements AutoCloseable {
  final ahl a;
  
  final aas b;
  
  a(ahl $$0, aas $$1) {
    this.a = $$0;
    this.b = $$1;
  }
  
  public final String toString() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> toString : (Lnet/minecraft/server/MinecraftServer$a;)Ljava/lang/String;
    //   6: areturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1698	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$a;
  }
  
  public final int hashCode() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> hashCode : (Lnet/minecraft/server/MinecraftServer$a;)I
    //   6: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1698	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$a;
  }
  
  public final boolean equals(Object $$0) {
    // Byte code:
    //   0: aload_0
    //   1: aload_1
    //   2: <illegal opcode> equals : (Lnet/minecraft/server/MinecraftServer$a;Ljava/lang/Object;)Z
    //   7: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1698	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	8	0	this	Lnet/minecraft/server/MinecraftServer$a;
    //   0	8	1	$$0	Ljava/lang/Object;
  }
  
  public ahl a() {
    return this.a;
  }
  
  public aas b() {
    return this.b;
  }
  
  public void close() {
    this.a.close();
  }
}
package net.minecraft.server;

import javax.annotation.Nullable;
import rm;

public final class b extends Record {
  private final String a;
  
  private final String b;
  
  private final boolean c;
  
  @Nullable
  private final rm d;
  
  public b(String $$0, String $$1, boolean $$2, @Nullable rm $$3) {
    this.a = $$0;
    this.b = $$1;
    this.c = $$2;
    this.d = $$3;
  }
  
  public final String toString() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> toString : (Lnet/minecraft/server/MinecraftServer$b;)Ljava/lang/String;
    //   6: areturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1696	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$b;
  }
  
  public final int hashCode() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> hashCode : (Lnet/minecraft/server/MinecraftServer$b;)I
    //   6: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1696	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$b;
  }
  
  public final boolean equals(Object $$0) {
    // Byte code:
    //   0: aload_0
    //   1: aload_1
    //   2: <illegal opcode> equals : (Lnet/minecraft/server/MinecraftServer$b;Ljava/lang/Object;)Z
    //   7: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #1696	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	8	0	this	Lnet/minecraft/server/MinecraftServer$b;
    //   0	8	1	$$0	Ljava/lang/Object;
  }
  
  public String a() {
    return this.a;
  }
  
  public String b() {
    return this.b;
  }
  
  public boolean c() {
    return this.c;
  }
  
  @Nullable
  public rm d() {
    return this.d;
  }
}
package net.minecraft.server;

import awb;
import awe;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;

class null implements awb {
  null(MinecraftServer.c $$0, long paramLong, int paramInt) {}
  
  public List<awe> a(String $$0) {
    return Collections.emptyList();
  }
  
  public boolean a(Path $$0) {
    return false;
  }
  
  public long a() {
    return this.c.a;
  }
  
  public int b() {
    return this.c.b;
  }
  
  public long c() {
    return this.a;
  }
  
  public int d() {
    return this.b;
  }
  
  public String e() {
    return "";
  }
}
package net.minecraft.server;

import awb;
import awe;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;

class c {
  final long a;
  
  final int b;
  
  c(long $$0, int $$1) {
    this.a = $$0;
    this.b = $$1;
  }
  
  awb a(long $$0, int $$1) {
    return new awb(this, $$0, $$1) {
        public List<awe> a(String $$0) {
          return Collections.emptyList();
        }
        
        public boolean a(Path $$0) {
          return false;
        }
        
        public long a() {
          return this.c.a;
        }
        
        public int b() {
          return this.c.b;
        }
        
        public long c() {
          return this.a;
        }
        
        public int d() {
          return this.b;
        }
        
        public String e() {
          return "";
        }
      };
  }
}
package net.minecraft.server;

import aai;
import aaj;
import aas;
import aau;
import aaw;
import aay;
import aaz;
import ab;
import aba;
import abc;
import abe;
import ac;
import ad;
import afg;
import afj;
import afm;
import afo;
import afp;
import afq;
import aft;
import afx;
import afy;
import agg;
import agm;
import agu;
import ahe;
import ahg;
import ahl;
import ahn;
import ahu;
import aid;
import aih;
import aij;
import aip;
import akq;
import akr;
import ale;
import alo;
import alp;
import alq;
import alu;
import alw;
import amk;
import avx;
import awb;
import awc;
import awe;
import awf;
import awi;
import awl;
import axj;
import axm;
import axn;
import axo;
import axq;
import axs;
import ayg;
import azj;
import blt;
import bso;
import bsz;
import btf;
import cct;
import cfh;
import cfo;
import cfv;
import cfw;
import cfx;
import cga;
import cgc;
import cge;
import cgs;
import cgy;
import com.google.common.base.Splitter;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import com.mojang.authlib.GameProfile;
import com.mojang.authlib.GameProfileRepository;
import com.mojang.authlib.minecraft.MinecraftSessionService;
import com.mojang.datafixers.DataFixer;
import com.mojang.logging.LogUtils;
import cwf;
import cwh;
import cxy;
import czu;
import daf;
import dag;
import dap;
import dcj;
import dnx;
import dq;
import dqm;
import dqo;
import dqp;
import dqq;
import dqr;
import dqt;
import dqw;
import dqy;
import dqz;
import dr;
import drf;
import drk;
import drl;
import ds;
import dvs;
import dvt;
import gt;
import hm;
import hn;
import hs;
import it.unimi.dsi.fastutil.longs.LongIterator;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.Writer;
import java.lang.management.ManagementFactory;
import java.lang.management.ThreadInfo;
import java.lang.management.ThreadMXBean;
import java.net.Proxy;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.FileAttribute;
import java.security.KeyPair;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.BooleanSupplier;
import java.util.function.Consumer;
import java.util.function.Function;
import javax.annotation.Nullable;
import javax.imageio.ImageIO;
import net.minecraft.obfuscate.DontObfuscate;
import nf;
import op;
import org.apache.commons.lang3.Validate;
import org.slf4j.Logger;
import q;
import rg;
import ri;
import rm;
import so;
import td;
import wd;
import z;
import zm;

public abstract class MinecraftServer extends ayg<aba> implements dq, AutoCloseable {
  private static final Logger n = LogUtils.getLogger();
  
  public static final String b = "vanilla";
  
  private static final float o = 0.8F;
  
  private static final int p = 100;
  
  public static final int c = 50;
  
  private static final int q = 2000;
  
  private static final int r = 15000;
  
  private static final long s = 5000000000L;
  
  private static final int t = 12;
  
  public static final int d = 11;
  
  private static final int u = 441;
  
  private static final int v = 6000;
  
  private static final int w = 3;
  
  public static final int e = 29999984;
  
  public static final cge f = new cge("Demo World", cfx.a, false, azj.c, false, new cfw(), cfo.a);
  
  private static final long x = 50L;
  
  public static final GameProfile g = new GameProfile(ad.c, "Anonymous Player");
  
  protected final dqt.c h;
  
  protected final dqw i;
  
  private final List<Runnable> y = Lists.newArrayList();
  
  private axo z = axn.a;
  
  private awc A = this.z.f();
  
  private Consumer<awb> B = $$0 -> aR();
  
  private Consumer<Path> C = $$0 -> {
    
    };
  
  private boolean D;
  
  @Nullable
  private c E;
  
  private boolean F;
  
  private final agg G;
  
  private final afy H;
  
  private final zm I = new zm();
  
  private final alu J = alu.a();
  
  private final DataFixer K;
  
  private String L;
  
  private int M = -1;
  
  private final hn.a N;
  
  private final Map<aai<cga>, afo> O = Maps.newLinkedHashMap();
  
  private aih P;
  
  private volatile boolean Q = true;
  
  private boolean R;
  
  private int S;
  
  protected final Proxy j;
  
  private boolean T;
  
  private boolean U;
  
  private boolean V;
  
  private boolean W;
  
  @Nullable
  private String X;
  
  private int Y;
  
  public final long[] k = new long[100];
  
  @Nullable
  private KeyPair Z;
  
  @Nullable
  private GameProfile aa;
  
  private boolean ab;
  
  private volatile boolean ac;
  
  private long ad;
  
  protected final aaz l;
  
  private long ae;
  
  private final Thread af;
  
  private long ag = ad.b();
  
  private long ah;
  
  private boolean ai;
  
  private final ahg aj;
  
  private final aay ak = new aay(this);
  
  @Nullable
  private dqm al;
  
  private final abe am = new abe();
  
  private final aaw an;
  
  private final ale ao = new ale();
  
  private boolean ap;
  
  private float aq;
  
  private final Executor ar;
  
  @Nullable
  private String as;
  
  private a at;
  
  private final dnx au;
  
  protected final dqz m;
  
  private volatile boolean av;
  
  public static <S extends MinecraftServer> S a(Function<Thread, S> $$0) {
    AtomicReference<S> $$1 = new AtomicReference<>();
    Thread $$2 = new Thread(() -> ((MinecraftServer)$$0.get()).v(), "Server thread");
    $$2.setUncaughtExceptionHandler(($$0, $$1) -> n.error("Uncaught exception in server thread", $$1));
    if (Runtime.getRuntime().availableProcessors() > 4)
      $$2.setPriority(8); 
    MinecraftServer minecraftServer = (MinecraftServer)$$0.apply($$2);
    $$1.set((S)minecraftServer);
    $$2.start();
    return (S)minecraftServer;
  }
  
  public MinecraftServer(Thread $$0, dqt.c $$1, ahg $$2, abc $$3, Proxy $$4, DataFixer $$5, aaz $$6, afy $$7) {
    super("Server");
    this.N = $$3.c();
    this.m = $$3.d();
    if (!this.m.A().d().e(cxy.b))
      throw new IllegalStateException("Missing Overworld dimension data"); 
    this.j = $$4;
    this.aj = $$2;
    this.at = new a($$3.a(), $$3.b());
    this.l = $$6;
    if ($$6.d() != null)
      $$6.d().a((Executor)this); 
    this.G = new agg(this);
    this.H = $$7;
    this.h = $$1;
    this.i = $$1.b();
    this.K = $$5;
    this.an = new aaw(this, this.at.b.a());
    this.au = new dnx((ahu)$$3.a(), $$1, $$5);
    this.af = $$0;
    this.ar = ad.f();
  }
  
  private void a(dqp $$0) {
    Objects.requireNonNull(aF());
    Objects.requireNonNull(aF());
    $$0.a(aF()::a, aF()::b, "scoreboard");
  }
  
  protected void f_() {
    if (!awi.e.c());
    boolean $$0 = false;
    awl $$1 = awi.e.e();
    this.m.a(getServerModName(), J().a());
    afx $$2 = this.H.create(11);
    a($$2);
    q();
    b($$2);
    if ($$1 != null)
      $$1.finish(); 
    if ($$0)
      try {
        awi.e.b();
      } catch (Throwable $$3) {
        n.warn("Failed to stop JFR profiling", $$3);
      }  
  }
  
  protected void q() {}
  
  protected void a(afx $$0) {
    dqy $$1 = this.m.H();
    dap $$2 = this.m.A();
    boolean $$3 = $$2.g();
    long $$4 = $$2.a();
    long $$5 = cgy.a($$4);
    ImmutableList immutableList = ImmutableList.of(new dag(), new daf(), new bso(), new blt(), new bsz($$1));
    hm<cxy> $$7 = $$2.d();
    cxy $$8 = (cxy)$$7.a(cxy.b);
    afo $$9 = new afo(this, this.ar, this.h, $$1, cga.e, $$8, $$0, $$3, $$5, (List)immutableList, true);
    this.O.put(cga.e, $$9);
    dqp $$10 = $$9.t();
    a($$10);
    this.al = new dqm($$10);
    cwh $$11 = $$9.p_();
    if (!$$1.p()) {
      try {
        a($$9, $$1, $$2.c(), $$3);
        $$1.c(true);
        if ($$3)
          a(this.m); 
      } catch (Throwable $$12) {
        q $$13 = q.a($$12, "Exception initializing level");
        try {
          $$9.a($$13);
        } catch (Throwable throwable) {}
        throw new z($$13);
      } 
      $$1.c(true);
    } 
    ac().a($$9);
    if (this.m.E() != null)
      aL().a(this.m.E()); 
    for (Map.Entry<aai<cxy>, cxy> $$14 : (Iterable<Map.Entry<aai<cxy>, cxy>>)$$7.f()) {
      aai<cxy> $$15 = $$14.getKey();
      if ($$15 == cxy.b)
        continue; 
      aai<cga> $$16 = aai.a(hm.P, $$15.a());
      dqo $$17 = new dqo(this.m, $$1);
      afo $$18 = new afo(this, this.ar, this.h, (dqy)$$17, $$16, $$14.getValue(), $$0, $$3, $$5, (List)ImmutableList.of(), false);
      $$11.a((cwf)new cwf.a($$18.p_()));
      this.O.put($$16, $$18);
    } 
    $$11.a($$1.r());
  }
  
  private static void a(afo $$0, dqy $$1, boolean $$2, boolean $$3) {
    if ($$3) {
      $$1.a(gt.b.b(80), 0.0F);
      return;
    } 
    afm $$4 = $$0.k();
    cfh $$5 = new cfh($$4.h().c().a());
    int $$6 = $$4.g().a((cgc)$$0);
    if ($$6 < $$0.u_()) {
      gt $$7 = $$5.l();
      $$6 = $$0.a(czu.a.b, $$7.u() + 8, $$7.w() + 8);
    } 
    $$1.a($$5.l().b(8, $$6, 8), 0.0F);
    int $$8 = 0;
    int $$9 = 0;
    int $$10 = 0;
    int $$11 = -1;
    int $$12 = 5;
    for (int $$13 = 0; $$13 < alp.h(11); $$13++) {
      if ($$8 >= -5 && $$8 <= 5 && $$9 >= -5 && $$9 <= 5) {
        gt $$14 = afj.a($$0, new cfh($$5.e + $$8, $$5.f + $$9));
        if ($$14 != null) {
          $$1.a($$14, 0.0F);
          break;
        } 
      } 
      if ($$8 == $$9 || ($$8 < 0 && $$8 == -$$9) || ($$8 > 0 && $$8 == 1 - $$9)) {
        int $$15 = $$10;
        $$10 = -$$11;
        $$11 = $$15;
      } 
      $$8 += $$10;
      $$9 += $$11;
    } 
    if ($$2) {
      dcj<?, ?> $$16 = (dcj<?, ?>)nf.m.a();
      $$16.a((cgs)$$0, $$4.g(), $$0.w, new gt($$1.a(), $$1.b(), $$1.c()));
    } 
  }
  
  private void a(dqz $$0) {
    $$0.a(azj.a);
    $$0.d(true);
    dqy $$1 = $$0.H();
    $$1.b(false);
    $$1.a(false);
    $$1.a(1000000000);
    $$1.b(6000L);
    $$1.a(cfx.d);
  }
  
  private void b(afx $$0) {
    afo $$1 = C();
    n.info("Preparing start region for dimension {}", $$1.ab().a());
    gt $$2 = $$1.Q();
    $$0.a(new cfh($$2));
    afm $$3 = $$1.k();
    $$3.a().a(500);
    this.ag = ad.b();
    $$3.a(aft.a, new cfh($$2), 11, amk.a);
    while ($$3.b() != 441) {
      this.ag = ad.b() + 10L;
      w();
    } 
    this.ag = ad.b() + 10L;
    w();
    for (afo $$4 : this.O.values()) {
      cfv $$5 = (cfv)$$4.t().a(cfv::b, "chunks");
      if ($$5 != null) {
        LongIterator $$6 = $$5.a().iterator();
        while ($$6.hasNext()) {
          long $$7 = $$6.nextLong();
          cfh $$8 = new cfh($$7);
          $$4.k().a($$8, true);
        } 
      } 
    } 
    this.ag = ad.b() + 10L;
    w();
    $$0.b();
    $$3.a().a(5);
    bi();
  }
  
  public cfx g_() {
    return this.m.m();
  }
  
  public boolean g() {
    return this.m.n();
  }
  
  public boolean a(boolean $$0, boolean $$1, boolean $$2) {
    boolean $$3 = false;
    for (afo $$4 : E()) {
      if (!$$0)
        n.info("Saving chunks for level '{}'/{}", $$4, $$4.ab().a()); 
      $$4.a(null, $$1, ($$4.b && !$$2));
      $$3 = true;
    } 
    afo $$5 = C();
    dqy $$6 = this.m.H();
    $$6.a($$5.p_().t());
    this.m.b(aL().c());
    this.h.a((hn)aX(), this.m, ac().r());
    if ($$1) {
      for (afo $$7 : E())
        n.info("ThreadedAnvilChunkStorage ({}): All chunks are saved", ($$7.k()).a.m()); 
      n.info("ThreadedAnvilChunkStorage: All dimensions are saved");
    } 
    return $$3;
  }
  
  public boolean b(boolean $$0, boolean $$1, boolean $$2) {
    try {
      this.av = true;
      ac().h();
      return a($$0, $$1, $$2);
    } finally {
      this.av = false;
    } 
  }
  
  public void close() {
    s();
  }
  
  public void s() {
    if (this.z.e())
      aT(); 
    n.info("Stopping server");
    if (ad() != null)
      ad().b(); 
    this.av = true;
    if (this.P != null) {
      n.info("Saving players");
      this.P.h();
      this.P.s();
    } 
    n.info("Saving worlds");
    for (afo $$0 : E()) {
      if ($$0 != null)
        $$0.b = false; 
    } 
    while (this.O.values().stream().anyMatch($$0 -> ($$0.k()).a.e())) {
      this.ag = ad.b() + 1L;
      for (afo $$1 : E()) {
        $$1.k().n();
        $$1.k().a(() -> true, false);
      } 
      w();
    } 
    a(false, true, false);
    for (afo $$2 : E()) {
      if ($$2 != null)
        try {
          $$2.close();
        } catch (IOException $$3) {
          n.error("Exception closing the level", $$3);
        }  
    } 
    this.av = false;
    this.at.close();
    try {
      this.h.close();
    } catch (IOException $$4) {
      n.error("Failed to unlock level {}", this.h.a(), $$4);
    } 
  }
  
  public String h_() {
    return this.L;
  }
  
  public void a_(String $$0) {
    this.L = $$0;
  }
  
  public boolean u() {
    return this.Q;
  }
  
  public void a(boolean $$0) {
    this.Q = false;
    if ($$0)
      try {
        this.af.join();
      } catch (InterruptedException $$1) {
        n.error("Error while shutting down", $$1);
      }  
  }
  
  protected void v() {
    try {
      if (e()) {
        this.ag = ad.b();
        this.I.a((rm)rm.b(this.X));
        this.I.a(new zm.c(ab.b().getName(), ab.b().getProtocolVersion()));
        this.I.a(aa());
        a(this.I);
        while (this.Q) {
          long $$0 = ad.b() - this.ag;
          if ($$0 > 2000L && this.ag - this.ad >= 15000L) {
            long $$1 = $$0 / 50L;
            n.warn("Can't keep up! Is the server overloaded? Running {}ms or {} ticks behind", Long.valueOf($$0), Long.valueOf($$1));
            this.ag += $$1 * 50L;
            this.ad = this.ag;
          } 
          if (this.F) {
            this.F = false;
            this.E = new c(ad.c(), this.S);
          } 
          this.ag += 50L;
          bj();
          this.A.a("tick");
          a(this::bg);
          this.A.b("nextTickWait");
          this.ai = true;
          this.ah = Math.max(ad.b() + 50L, this.ag);
          w();
          this.A.c();
          bk();
          this.ac = true;
          awi.e.a(this.aq);
        } 
      } else {
        throw new IllegalStateException("Failed to initialize server");
      } 
    } catch (Throwable $$3) {
      n.error("Encountered an unexpected exception", $$3);
      q $$4 = a($$3);
      b($$4.g());
      File $$5 = new File(new File(z(), "crash-reports"), "crash-" + (new SimpleDateFormat("yyyy-MM-dd_HH.mm.ss")).format(new Date()) + "-server.txt");
      if ($$4.a($$5)) {
        n.error("This crash report has been saved to: {}", $$5.getAbsolutePath());
      } else {
        n.error("We were unable to save this crash report to disk.");
      } 
      a($$4);
    } finally {
      try {
        this.R = true;
        s();
      } catch (Throwable $$7) {
        n.error("Exception stopping the server", $$7);
      } finally {
        if (this.l.d() != null)
          this.l.d().a(); 
        f();
      } 
    } 
  }
  
  private static q a(Throwable $$0) {
    q $$5;
    z $$1 = null;
    Throwable $$2 = $$0;
    while ($$2 != null) {
      if ($$2 instanceof z) {
        z $$3 = (z)$$2;
        $$1 = $$3;
      } 
      $$2 = $$2.getCause();
    } 
    if ($$1 != null) {
      q $$4 = $$1.a();
      if ($$1 != $$0)
        $$4.a("Wrapped in").a("Wrapping exception", $$0); 
    } else {
      $$5 = new q("Exception in server tick loop", $$0);
    } 
    return $$5;
  }
  
  private boolean bg() {
    return (bs() || ad.b() < (this.ai ? this.ah : this.ag));
  }
  
  protected void w() {
    bq();
    c(() -> !bg());
  }
  
  protected aba a(Runnable $$0) {
    return new aba(this.S, $$0);
  }
  
  protected boolean a(aba $$0) {
    return ($$0.a() + 3 < this.S || bg());
  }
  
  public boolean x() {
    boolean $$0 = bh();
    this.ai = $$0;
    return $$0;
  }
  
  private boolean bh() {
    if (super.x())
      return true; 
    if (bg())
      for (afo $$0 : E()) {
        if ($$0.k().d())
          return true; 
      }  
    return false;
  }
  
  protected void b(aba $$0) {
    aP().d("runTask");
    super.d((Runnable)$$0);
  }
  
  private void a(zm $$0) {
    Optional<File> $$1 = Optional.<File>of(c("server-icon.png")).filter(File::isFile);
    if (!$$1.isPresent())
      $$1 = this.h.e().map(Path::toFile).filter(File::isFile); 
    $$1.ifPresent($$1 -> {
          try {
            BufferedImage $$2 = ImageIO.read($$1);
            Validate.validState(($$2.getWidth() == 64), "Must be 64 pixels wide", new Object[0]);
            Validate.validState(($$2.getHeight() == 64), "Must be 64 pixels high", new Object[0]);
            ByteArrayOutputStream $$3 = new ByteArrayOutputStream();
            ImageIO.write($$2, "PNG", $$3);
            byte[] $$4 = Base64.getEncoder().encode($$3.toByteArray());
            $$0.a("data:image/png;base64," + new String($$4, StandardCharsets.UTF_8));
          } catch (Exception $$5) {
            n.error("Couldn't load server icon", $$5);
          } 
        });
  }
  
  public Optional<Path> y() {
    return this.h.e();
  }
  
  public File z() {
    return new File(".");
  }
  
  public void a(q $$0) {}
  
  public void f() {}
  
  public void a(BooleanSupplier $$0) {
    long $$1 = ad.c();
    this.S++;
    b($$0);
    if ($$1 - this.ae >= 5000000000L) {
      this.ae = $$1;
      this.I.a(new zm.a(H(), G()));
      if (!aj()) {
        GameProfile[] $$2 = new GameProfile[Math.min(G(), 12)];
        int $$3 = alp.a(this.J, 0, G() - $$2.length);
        for (int $$4 = 0; $$4 < $$2.length; $$4++) {
          afp $$5 = this.P.t().get($$3 + $$4);
          if ($$5.V()) {
            $$2[$$4] = $$5.fz();
          } else {
            $$2[$$4] = g;
          } 
        } 
        Collections.shuffle(Arrays.asList((Object[])$$2));
        this.I.b().a($$2);
      } 
    } 
    if (this.S % 6000 == 0) {
      n.debug("Autosave started");
      this.A.a("save");
      b(true, false, false);
      this.A.c();
      n.debug("Autosave finished");
    } 
    this.A.a("tallying");
    long $$6 = this.k[this.S % 100] = ad.c() - $$1;
    this.aq = this.aq * 0.8F + (float)$$6 / 1000000.0F * 0.19999999F;
    long $$7 = ad.c();
    this.ao.a($$7 - $$1);
    this.A.c();
  }
  
  public void b(BooleanSupplier $$0) {
    this.A.a("commandFunctions");
    aA().c();
    this.A.b("levels");
    for (afo $$1 : E()) {
      this.A.a(() -> "" + $$0 + " " + $$0);
      if (this.S % 20 == 0) {
        this.A.a("timeSync");
        this.P.a((so)new wd($$1.U(), $$1.V(), $$1.W().b(cfw.k)), $$1.ab());
        this.A.c();
      } 
      this.A.a("tick");
      try {
        $$1.a($$0);
      } catch (Throwable $$2) {
        q $$3 = q.a($$2, "Exception ticking world");
        $$1.a($$3);
        throw new z($$3);
      } 
      this.A.c();
      this.A.c();
    } 
    this.A.b("connection");
    ad().c();
    this.A.b("players");
    this.P.d();
    if (ab.aK)
      op.a.b(); 
    this.A.b("server gui refresh");
    for (int $$4 = 0; $$4 < this.y.size(); $$4++)
      ((Runnable)this.y.get($$4)).run(); 
    this.A.c();
  }
  
  public boolean A() {
    return true;
  }
  
  public void b(Runnable $$0) {
    this.y.add($$0);
  }
  
  protected void b(String $$0) {
    this.as = $$0;
  }
  
  public boolean B() {
    return !this.af.isAlive();
  }
  
  public File c(String $$0) {
    return new File(z(), $$0);
  }
  
  public final afo C() {
    return this.O.get(cga.e);
  }
  
  @Nullable
  public afo a(aai<cga> $$0) {
    return this.O.get($$0);
  }
  
  public Set<aai<cga>> D() {
    return this.O.keySet();
  }
  
  public Iterable<afo> E() {
    return this.O.values();
  }
  
  public String F() {
    return ab.b().getName();
  }
  
  public int G() {
    return this.P.m();
  }
  
  public int H() {
    return this.P.n();
  }
  
  public String[] I() {
    return this.P.e();
  }
  
  @DontObfuscate
  public String getServerModName() {
    return "vanilla";
  }
  
  public ac b(ac $$0) {
    $$0.a("Server Running", () -> Boolean.toString(this.Q));
    if (this.P != null)
      $$0.a("Player Count", () -> "" + this.P.m() + " / " + this.P.m() + "; " + this.P.n()); 
    $$0.a("Data Packs", () -> {
          StringBuilder $$0 = new StringBuilder();
          for (ahe $$1 : this.aj.e()) {
            if ($$0.length() > 0)
              $$0.append(", "); 
            $$0.append($$1.e());
            if (!$$1.c().a())
              $$0.append(" (incompatible)"); 
          } 
          return $$0.toString();
        });
    $$0.a("World Generation", () -> this.m.B().toString());
    if (this.as != null)
      $$0.a("Server Id", () -> this.as); 
    return a($$0);
  }
  
  public alo J() {
    return alo.a("vanilla", this::getServerModName, "Server", MinecraftServer.class);
  }
  
  public void a(rm $$0) {
    n.info($$0.getString());
  }
  
  public KeyPair K() {
    return this.Z;
  }
  
  public int L() {
    return this.M;
  }
  
  public void a(int $$0) {
    this.M = $$0;
  }
  
  @Nullable
  public GameProfile M() {
    return this.aa;
  }
  
  public void b(@Nullable GameProfile $$0) {
    this.aa = $$0;
  }
  
  public boolean N() {
    return (this.aa != null);
  }
  
  protected void O() {
    n.info("Generating keypair");
    try {
      this.Z = akq.b();
    } catch (akr $$0) {
      throw new IllegalStateException("Failed to generate key pair", $$0);
    } 
  }
  
  public void a(azj $$0, boolean $$1) {
    if (!$$1 && this.m.t())
      return; 
    this.m.a(this.m.n() ? azj.d : $$0);
    bi();
    ac().t().forEach(this::c);
  }
  
  public int b(int $$0) {
    return $$0;
  }
  
  private void bi() {
    for (afo $$0 : E())
      $$0.b(P(), V()); 
  }
  
  public void b(boolean $$0) {
    this.m.d($$0);
    ac().t().forEach(this::c);
  }
  
  private void c(afp $$0) {
    dqq $$1 = $$0.x().n_();
    $$0.b.a((so)new td($$1.s(), $$1.t()));
  }
  
  public boolean P() {
    return (this.m.s() != azj.a);
  }
  
  public boolean Q() {
    return this.ab;
  }
  
  public void c(boolean $$0) {
    this.ab = $$0;
  }
  
  public Optional<b> R() {
    return Optional.empty();
  }
  
  public boolean S() {
    return R().filter(b::c).isPresent();
  }
  
  public boolean T() {
    return this.T;
  }
  
  public void d(boolean $$0) {
    this.T = $$0;
  }
  
  public boolean U() {
    return this.U;
  }
  
  public void e(boolean $$0) {
    this.U = $$0;
  }
  
  public boolean V() {
    return true;
  }
  
  public boolean W() {
    return true;
  }
  
  public boolean X() {
    return this.V;
  }
  
  public void f(boolean $$0) {
    this.V = $$0;
  }
  
  public boolean Y() {
    return this.W;
  }
  
  public void g(boolean $$0) {
    this.W = $$0;
  }
  
  public String Z() {
    return this.X;
  }
  
  public void d(String $$0) {
    this.X = $$0;
  }
  
  public boolean aa() {
    return false;
  }
  
  public boolean ab() {
    return this.R;
  }
  
  public aih ac() {
    return this.P;
  }
  
  public void a(aih $$0) {
    this.P = $$0;
  }
  
  public void a(cfx $$0) {
    this.m.a($$0);
  }
  
  @Nullable
  public agg ad() {
    return this.G;
  }
  
  public boolean ae() {
    return this.ac;
  }
  
  public boolean af() {
    return false;
  }
  
  public boolean a(@Nullable cfx $$0, boolean $$1, int $$2) {
    return false;
  }
  
  public int ag() {
    return this.S;
  }
  
  public int ah() {
    return 16;
  }
  
  public boolean a(afo $$0, gt $$1, btf $$2) {
    return false;
  }
  
  public boolean ai() {
    return true;
  }
  
  public boolean aj() {
    return false;
  }
  
  public Proxy ak() {
    return this.j;
  }
  
  public int al() {
    return this.Y;
  }
  
  public void c(int $$0) {
    this.Y = $$0;
  }
  
  public MinecraftSessionService am() {
    return this.l.a();
  }
  
  public alw an() {
    return this.l.b();
  }
  
  public GameProfileRepository ao() {
    return this.l.c();
  }
  
  public aid ap() {
    return this.l.d();
  }
  
  public zm aq() {
    return this.I;
  }
  
  public void ar() {
    this.ae = 0L;
  }
  
  public int as() {
    return 29999984;
  }
  
  public boolean at() {
    return (super.at() && !ab());
  }
  
  public void c(Runnable $$0) {
    if (ab())
      throw new RejectedExecutionException("Server already shutting down"); 
    super.c($$0);
  }
  
  public Thread au() {
    return this.af;
  }
  
  public int av() {
    return 256;
  }
  
  public boolean aw() {
    return false;
  }
  
  public long ax() {
    return this.ag;
  }
  
  public DataFixer ay() {
    return this.K;
  }
  
  public int a(@Nullable afo $$0) {
    if ($$0 != null)
      return $$0.W().c(cfw.r); 
    return 10;
  }
  
  public aau az() {
    return this.at.b.g();
  }
  
  public aaw aA() {
    return this.an;
  }
  
  public CompletableFuture<Void> a(Collection<String> $$0) {
    hn.a $$1 = aX();
    CompletableFuture<Void> $$2 = CompletableFuture.supplyAsync(() -> {
          Objects.requireNonNull(this.aj);
          return (ImmutableList)$$0.stream().map(this.aj::a).filter(Objects::nonNull).map(ahe::d).collect(ImmutableList.toImmutableList());
        }(Executor)this).thenCompose($$1 -> {
          ahn ahn = new ahn(agu.b, (List)$$1);
          return aas.a((ahu)ahn, $$0, k() ? ds.a.b : ds.a.c, i(), this.ar, (Executor)this).whenComplete(()).thenApply(());
        }).thenAcceptAsync($$1 -> {
          this.at.close();
          this.at = $$1;
          this.aj.a($$0);
          this.m.a(a(this.aj));
          this.at.b.a((hn)aX());
          ac().h();
          ac().u();
          this.an.a(this.at.b.a());
          this.au.a((ahu)this.at.a);
        }(Executor)this);
    if (bm()) {
      Objects.requireNonNull($$2);
      c($$2::isDone);
    } 
    return $$2;
  }
  
  public static cfo a(ahg $$0, cfo $$1, boolean $$2) {
    $$0.a();
    if ($$2) {
      $$0.a(Collections.singleton("vanilla"));
      return cfo.a;
    } 
    Set<String> $$3 = Sets.newLinkedHashSet();
    for (String $$4 : $$1.a()) {
      if ($$0.b($$4)) {
        $$3.add($$4);
        continue;
      } 
      n.warn("Missing data pack {}", $$4);
    } 
    for (ahe $$5 : $$0.c()) {
      String $$6 = $$5.e();
      if (!$$1.b().contains($$6) && !$$3.contains($$6)) {
        n.info("Found new data pack {}, loading it automatically", $$6);
        $$3.add($$6);
      } 
    } 
    if ($$3.isEmpty()) {
      n.info("No datapacks selected, forcing vanilla");
      $$3.add("vanilla");
    } 
    $$0.a($$3);
    return a($$0);
  }
  
  private static cfo a(ahg $$0) {
    Collection<String> $$1 = $$0.d();
    ImmutableList immutableList = ImmutableList.copyOf($$1);
    List<String> $$3 = (List<String>)$$0.b().stream().filter($$1 -> !$$0.contains($$1)).collect(ImmutableList.toImmutableList());
    return new cfo((List)immutableList, $$3);
  }
  
  public void a(dr $$0) {
    if (!aM())
      return; 
    aih $$1 = $$0.m().ac();
    aip $$2 = $$1.i();
    List<afp> $$3 = Lists.newArrayList($$1.t());
    for (afp $$4 : $$3) {
      if (!$$2.a($$4.fz()))
        $$4.b.b((rm)rm.c("multiplayer.disconnect.not_whitelisted")); 
    } 
  }
  
  public ahg aB() {
    return this.aj;
  }
  
  public ds aC() {
    return this.at.b.f();
  }
  
  public dr aD() {
    afo $$0 = C();
    return new dr(this, ($$0 == null) ? dvt.b : dvt.b((hs)$$0.Q()), dvs.a, $$0, 4, "Server", (rm)rm.b("Server"), this, null);
  }
  
  public boolean i_() {
    return true;
  }
  
  public boolean j_() {
    return true;
  }
  
  public cct aE() {
    return this.at.b.e();
  }
  
  public aay aF() {
    return this.ak;
  }
  
  public dqm aG() {
    if (this.al == null)
      throw new NullPointerException("Called before server init"); 
    return this.al;
  }
  
  public drk aH() {
    return this.at.b.c();
  }
  
  public drl aI() {
    return this.at.b.b();
  }
  
  public drf aJ() {
    return this.at.b.d();
  }
  
  public cfw aK() {
    return C().W();
  }
  
  public abe aL() {
    return this.am;
  }
  
  public boolean aM() {
    return this.ap;
  }
  
  public void h(boolean $$0) {
    this.ap = $$0;
  }
  
  public float aN() {
    return this.aq;
  }
  
  public int c(GameProfile $$0) {
    if (ac().e($$0)) {
      aij $$1 = (aij)ac().k().b($$0);
      if ($$1 != null)
        return $$1.a(); 
      if (a($$0))
        return 4; 
      if (N())
        return ac().v() ? 4 : 0; 
      return h();
    } 
    return 0;
  }
  
  public ale aO() {
    return this.ao;
  }
  
  public awc aP() {
    return this.A;
  }
  
  public void a(Path $$0) throws IOException {}
  
  private void b(Path $$0) {
    Path $$1 = $$0.resolve("levels");
    try {
      for (Map.Entry<aai<cga>, afo> $$2 : this.O.entrySet()) {
        aaj $$3 = ((aai)$$2.getKey()).a();
        Path $$4 = $$1.resolve($$3.b()).resolve($$3.a());
        Files.createDirectories($$4, (FileAttribute<?>[])new FileAttribute[0]);
        ((afo)$$2.getValue()).a($$4);
      } 
      d($$0.resolve("gamerules.txt"));
      e($$0.resolve("classpath.txt"));
      c($$0.resolve("stats.txt"));
      f($$0.resolve("threads.txt"));
      a($$0.resolve("server.properties.txt"));
      g($$0.resolve("modules.txt"));
    } catch (IOException $$5) {
      n.warn("Failed to save debug report", $$5);
    } 
  }
  
  private void c(Path $$0) throws IOException {
    Writer $$1 = Files.newBufferedWriter($$0, new java.nio.file.OpenOption[0]);
    try {
      $$1.write(String.format("pending_tasks: %d\n", new Object[] { Integer.valueOf(bn()) }));
      $$1.write(String.format("average_tick_time: %f\n", new Object[] { Float.valueOf(aN()) }));
      $$1.write(String.format("tick_times: %s\n", new Object[] { Arrays.toString(this.k) }));
      $$1.write(String.format("queue: %s\n", new Object[] { ad.f() }));
      if ($$1 != null)
        $$1.close(); 
    } catch (Throwable throwable) {
      if ($$1 != null)
        try {
          $$1.close();
        } catch (Throwable throwable1) {
          throwable.addSuppressed(throwable1);
        }  
      throw throwable;
    } 
  }
  
  private void d(Path $$0) throws IOException {
    Writer $$1 = Files.newBufferedWriter($$0, new java.nio.file.OpenOption[0]);
    try {
      List<String> $$2 = Lists.newArrayList();
      cfw $$3 = aK();
      cfw.a(new cfw.c(this, $$2, $$3) {
            public <T extends cfw.g<T>> void a(cfw.e<T> $$0, cfw.f<T> $$1) {
              this.a.add(String.format("%s=%s\n", new Object[] { $$0.a(), this.b.a($$0) }));
            }
          });
      for (String $$4 : $$2)
        $$1.write($$4); 
      if ($$1 != null)
        $$1.close(); 
    } catch (Throwable throwable) {
      if ($$1 != null)
        try {
          $$1.close();
        } catch (Throwable throwable1) {
          throwable.addSuppressed(throwable1);
        }  
      throw throwable;
    } 
  }
  
  private void e(Path $$0) throws IOException {
    Writer $$1 = Files.newBufferedWriter($$0, new java.nio.file.OpenOption[0]);
    try {
      String $$2 = System.getProperty("java.class.path");
      String $$3 = System.getProperty("path.separator");
      for (String $$4 : Splitter.on($$3).split($$2)) {
        $$1.write($$4);
        $$1.write("\n");
      } 
      if ($$1 != null)
        $$1.close(); 
    } catch (Throwable throwable) {
      if ($$1 != null)
        try {
          $$1.close();
        } catch (Throwable throwable1) {
          throwable.addSuppressed(throwable1);
        }  
      throw throwable;
    } 
  }
  
  private void f(Path $$0) throws IOException {
    ThreadMXBean $$1 = ManagementFactory.getThreadMXBean();
    ThreadInfo[] $$2 = $$1.dumpAllThreads(true, true);
    Arrays.sort($$2, Comparator.comparing(ThreadInfo::getThreadName));
    Writer $$3 = Files.newBufferedWriter($$0, new java.nio.file.OpenOption[0]);
    try {
      for (ThreadInfo $$4 : $$2) {
        $$3.write($$4.toString());
        $$3.write(10);
      } 
      if ($$3 != null)
        $$3.close(); 
    } catch (Throwable throwable) {
      if ($$3 != null)
        try {
          $$3.close();
        } catch (Throwable throwable1) {
          throwable.addSuppressed(throwable1);
        }  
      throw throwable;
    } 
  }
  
  private void g(Path $$0) throws IOException {
    Writer $$1 = Files.newBufferedWriter($$0, new java.nio.file.OpenOption[0]);
    try {
      List<alq.a> $$2;
      try {
        $$2 = Lists.newArrayList(alq.a());
      } catch (Throwable $$3) {
        n.warn("Failed to list native modules", $$3);
        if ($$1 != null)
          $$1.close(); 
        return;
      } 
      $$2.sort(Comparator.comparing($$0 -> $$0.a));
      for (alq.a $$5 : $$2) {
        $$1.write($$5.toString());
        $$1.write(10);
      } 
      if ($$1 != null)
        $$1.close(); 
    } catch (Throwable $$4) {
      if ($$1 != null)
        try {
          $$1.close();
        } catch (Throwable throwable) {
          $$4.addSuppressed(throwable);
        }  
      throw $$4;
    } 
  }
  
  private void bj() {
    if (this.D) {
      this.z = (axo)axm.a((axj)new axq(ad.a, 
            k()), ad.a, 
          
          ad.g(), new axs("server"), this.B, $$0 -> {
            h(());
            this.C.accept($$0);
          });
      this.D = false;
    } 
    this.A = awf.a(this.z.f(), awf.a("Server"));
    this.z.c();
    this.A.a();
  }
  
  private void bk() {
    this.A.b();
    this.z.d();
  }
  
  public boolean aQ() {
    return this.z.e();
  }
  
  public void a(Consumer<awb> $$0, Consumer<Path> $$1) {
    this.B = ($$1 -> {
        aR();
        $$0.accept($$1);
      });
    this.C = $$1;
    this.D = true;
  }
  
  public void aR() {
    this.z = axn.a;
  }
  
  public void aS() {
    this.z.a();
  }
  
  public void aT() {
    this.z.b();
    this.A = this.z.f();
  }
  
  public Path a(dqr $$0) {
    return this.h.a($$0);
  }
  
  public boolean aU() {
    return true;
  }
  
  public dnx aV() {
    return this.au;
  }
  
  public dqz aW() {
    return this.m;
  }
  
  public hn.a aX() {
    return this.N;
  }
  
  public agm a(afp $$0) {
    return agm.a;
  }
  
  public afq b(afp $$0) {
    return Q() ? (afq)new afg($$0) : new afq($$0);
  }
  
  @Nullable
  public cfx aY() {
    return null;
  }
  
  public ahu aZ() {
    return (ahu)this.at.a;
  }
  
  public boolean ba() {
    return this.av;
  }
  
  public boolean bb() {
    return (this.F || this.E != null);
  }
  
  public void bc() {
    this.F = true;
  }
  
  public awb bd() {
    if (this.E == null)
      return (awb)avx.a; 
    awb $$0 = this.E.a(ad.c(), this.S);
    this.E = null;
    return $$0;
  }
  
  public int be() {
    return 1000000;
  }
  
  public void a(ri $$0, rm $$1) {
    n.info(rm.a("chat.type.text", new Object[] { $$0.b(), $$1 }).getString());
  }
  
  public rg bf() {
    return rg.a;
  }
  
  protected abstract boolean e() throws IOException;
  
  public abstract int h();
  
  public abstract int i();
  
  public abstract boolean j();
  
  public abstract ac a(ac paramac);
  
  public abstract boolean k();
  
  public abstract int l();
  
  public abstract boolean m();
  
  public abstract boolean n();
  
  public abstract boolean o();
  
  public abstract boolean G_();
  
  public abstract boolean a(GameProfile paramGameProfile);
  
  public static final class b extends Record {
    private final String a;
    
    private final String b;
    
    private final boolean c;
    
    @Nullable
    private final rm d;
    
    public b(String $$0, String $$1, boolean $$2, @Nullable rm $$3) {
      this.a = $$0;
      this.b = $$1;
      this.c = $$2;
      this.d = $$3;
    }
    
    public final String toString() {
      // Byte code:
      //   0: aload_0
      //   1: <illegal opcode> toString : (Lnet/minecraft/server/MinecraftServer$b;)Ljava/lang/String;
      //   6: areturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1696	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$b;
    }
    
    public final int hashCode() {
      // Byte code:
      //   0: aload_0
      //   1: <illegal opcode> hashCode : (Lnet/minecraft/server/MinecraftServer$b;)I
      //   6: ireturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1696	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$b;
    }
    
    public final boolean equals(Object $$0) {
      // Byte code:
      //   0: aload_0
      //   1: aload_1
      //   2: <illegal opcode> equals : (Lnet/minecraft/server/MinecraftServer$b;Ljava/lang/Object;)Z
      //   7: ireturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1696	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	8	0	this	Lnet/minecraft/server/MinecraftServer$b;
      //   0	8	1	$$0	Ljava/lang/Object;
    }
    
    public String a() {
      return this.a;
    }
    
    public String b() {
      return this.b;
    }
    
    public boolean c() {
      return this.c;
    }
    
    @Nullable
    public rm d() {
      return this.d;
    }
  }
  
  private static final class a extends Record implements AutoCloseable {
    final ahl a;
    
    final aas b;
    
    a(ahl $$0, aas $$1) {
      this.a = $$0;
      this.b = $$1;
    }
    
    public final String toString() {
      // Byte code:
      //   0: aload_0
      //   1: <illegal opcode> toString : (Lnet/minecraft/server/MinecraftServer$a;)Ljava/lang/String;
      //   6: areturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1698	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$a;
    }
    
    public final int hashCode() {
      // Byte code:
      //   0: aload_0
      //   1: <illegal opcode> hashCode : (Lnet/minecraft/server/MinecraftServer$a;)I
      //   6: ireturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1698	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	7	0	this	Lnet/minecraft/server/MinecraftServer$a;
    }
    
    public final boolean equals(Object $$0) {
      // Byte code:
      //   0: aload_0
      //   1: aload_1
      //   2: <illegal opcode> equals : (Lnet/minecraft/server/MinecraftServer$a;Ljava/lang/Object;)Z
      //   7: ireturn
      // Line number table:
      //   Java source line number -> byte code offset
      //   #1698	-> 0
      // Local variable table:
      //   start	length	slot	name	descriptor
      //   0	8	0	this	Lnet/minecraft/server/MinecraftServer$a;
      //   0	8	1	$$0	Ljava/lang/Object;
    }
    
    public ahl a() {
      return this.a;
    }
    
    public aas b() {
      return this.b;
    }
    
    public void close() {
      this.a.close();
    }
  }
  
  private static class c {
    final long a;
    
    final int b;
    
    c(long $$0, int $$1) {
      this.a = $$0;
      this.b = $$1;
    }
    
    awb a(long $$0, int $$1) {
      return new awb(this, $$0, $$1) {
          public List<awe> a(String $$0) {
            return Collections.emptyList();
          }
          
          public boolean a(Path $$0) {
            return false;
          }
          
          public long a() {
            return this.c.a;
          }
          
          public int b() {
            return this.c.b;
          }
          
          public long c() {
            return this.a;
          }
          
          public int d() {
            return this.b;
          }
          
          public String e() {
            return "";
          }
        };
    }
  }
  
  class null implements awb {
    null(MinecraftServer.c $$0, long param1Long, int param1Int) {}
    
    public List<awe> a(String $$0) {
      return Collections.emptyList();
    }
    
    public boolean a(Path $$0) {
      return false;
    }
    
    public long a() {
      return this.c.a;
    }
    
    public int b() {
      return this.c.b;
    }
    
    public long c() {
      return this.a;
    }
    
    public int d() {
      return this.b;
    }
    
    public String e() {
      return "";
    }
  }
}
import com.google.common.collect.Lists;
import com.mojang.logging.LogUtils;
import it.unimi.dsi.fastutil.ints.IntArrayList;
import it.unimi.dsi.fastutil.ints.IntList;
import it.unimi.dsi.fastutil.ints.IntListIterator;
import java.util.Iterator;
import java.util.List;
import javax.annotation.Nullable;
import org.slf4j.Logger;

public class zz<C extends azf> implements zy<Integer> {
  private static final Logger d = LogUtils.getLogger();
  
  protected final btj a = new btj();
  
  protected bte b;
  
  protected bwy<C> c;
  
  public zz(bwy<C> $$0) {
    this.c = $$0;
  }
  
  public void a(afp $$0, @Nullable ccs<C> $$1, boolean $$2) {
    if ($$1 == null || !$$0.E().b($$1))
      return; 
    this.b = $$0.fB();
    if (!a() && !$$0.f())
      return; 
    this.a.a();
    $$0.fB().a(this.a);
    this.c.a(this.a);
    if (this.a.a($$1, (IntList)null)) {
      a($$1, $$2);
    } else {
      a(true);
      $$0.b.a(new um($$0.bU.j, $$1));
    } 
    $$0.fB().e();
  }
  
  protected void a(boolean $$0) {
    for (int $$1 = 0; $$1 < this.c.p(); $$1++) {
      if (this.c.e($$1)) {
        caa $$2 = this.c.b($$1).e().o();
        this.b.a($$2, false);
        this.c.b($$1).d($$2);
      } 
    } 
    this.c.l();
  }
  
  protected void a(ccs<C> $$0, boolean $$1) {
    boolean $$2 = this.c.a($$0);
    int $$3 = this.a.b($$0, (IntList)null);
    if ($$2)
      for (int $$4 = 0; $$4 < this.c.o() * this.c.n() + 1; $$4++) {
        if ($$4 != this.c.m()) {
          caa $$5 = this.c.b($$4).e();
          if (!$$5.b() && Math.min($$3, $$5.f()) < $$5.K() + 1)
            return; 
        } 
      }  
    int $$6 = a($$1, $$3, $$2);
    IntArrayList intArrayList = new IntArrayList();
    if (this.a.a($$0, (IntList)intArrayList, $$6)) {
      int $$8 = $$6;
      for (IntListIterator<Integer> intListIterator = intArrayList.iterator(); intListIterator.hasNext(); ) {
        int $$9 = ((Integer)intListIterator.next()).intValue();
        int $$10 = btj.a($$9).f();
        if ($$10 < $$8)
          $$8 = $$10; 
      } 
      $$6 = $$8;
      if (this.a.a($$0, (IntList)intArrayList, $$6)) {
        a(false);
        a(this.c.n(), this.c.o(), this.c.m(), $$0, (Iterator<Integer>)intArrayList.iterator(), $$6);
      } 
    } 
  }
  
  public void a(Iterator<Integer> $$0, int $$1, int $$2, int $$3, int $$4) {
    bxg $$5 = this.c.b($$1);
    caa $$6 = btj.a(((Integer)$$0.next()).intValue());
    if (!$$6.b())
      for (int $$7 = 0; $$7 < $$2; $$7++)
        a($$5, $$6);  
  }
  
  protected int a(boolean $$0, int $$1, boolean $$2) {
    int $$3 = 1;
    if ($$0) {
      $$3 = $$1;
    } else if ($$2) {
      $$3 = 64;
      for (int $$4 = 0; $$4 < this.c.n() * this.c.o() + 1; $$4++) {
        if ($$4 != this.c.m()) {
          caa $$5 = this.c.b($$4).e();
          if (!$$5.b() && $$3 > $$5.K())
            $$3 = $$5.K(); 
        } 
      } 
      if ($$3 < 64)
        $$3++; 
    } 
    return $$3;
  }
  
  protected void a(bxg $$0, caa $$1) {
    int $$2 = this.b.c($$1);
    if ($$2 == -1)
      return; 
    caa $$3 = this.b.a($$2).o();
    if ($$3.b())
      return; 
    if ($$3.K() > 1) {
      this.b.a($$2, 1);
    } else {
      this.b.b($$2);
    } 
    $$3.e(1);
    if ($$0.e().b()) {
      $$0.d($$3);
    } else {
      $$0.e().f(1);
    } 
  }
  
  private boolean a() {
    List<caa> $$0 = Lists.newArrayList();
    int $$1 = b();
    for (int $$2 = 0; $$2 < this.c.n() * this.c.o() + 1; $$2++) {
      if ($$2 != this.c.m()) {
        caa $$3 = this.c.b($$2).e().o();
        if (!$$3.b()) {
          int $$4 = this.b.d($$3);
          if ($$4 == -1 && $$0.size() <= $$1) {
            for (caa $$5 : $$0) {
              if ($$5.a($$3) && $$5.K() != $$5.f() && $$5.K() + $$3.K() <= $$5.f()) {
                $$5.f($$3.K());
                $$3.e(0);
                break;
              } 
            } 
            if (!$$3.b())
              if ($$0.size() < $$1) {
                $$0.add($$3);
              } else {
                return false;
              }  
          } else if ($$4 == -1) {
            return false;
          } 
        } 
      } 
    } 
    return true;
  }
  
  private int b() {
    int $$0 = 0;
    for (caa $$1 : this.b.h) {
      if ($$1.b())
        $$0++; 
    } 
    return $$0;
  }
}
import java.util.Optional;

public final class zf extends Record implements so<zd> {
  private final String a;
  
  private final Optional<bti.a> b;
  
  public zf(String $$0, Optional<bti.a> $$1) {
    this.a = $$0;
    this.b = $$1;
  }
  
  public final String toString() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> toString : (Lzf;)Ljava/lang/String;
    //   6: areturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #10	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lzf;
  }
  
  public final int hashCode() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> hashCode : (Lzf;)I
    //   6: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #10	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lzf;
  }
  
  public final boolean equals(Object $$0) {
    // Byte code:
    //   0: aload_0
    //   1: aload_1
    //   2: <illegal opcode> equals : (Lzf;Ljava/lang/Object;)Z
    //   7: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #10	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	8	0	this	Lzf;
    //   0	8	1	$$0	Ljava/lang/Object;
  }
  
  public String b() {
    return this.a;
  }
  
  public Optional<bti.a> c() {
    return this.b;
  }
  
  public zf(qx $$0) {
    this($$0.e(16), $$0.b(a::new));
  }
  
  public void a(qx $$0) {
    $$0.a(this.a, 16);
    $$0.a(this.b, ($$1, $$2) -> $$2.a($$0));
  }
  
  public void a(zd $$0) {
    $$0.a(this);
  }
}
public class yl implements so<wv> {
  private final gt a;
  
  private final aaj b;
  
  private final aaj c;
  
  private final aaj d;
  
  private final String e;
  
  private final cte.a f;
  
  public yl(gt $$0, aaj $$1, aaj $$2, aaj $$3, String $$4, cte.a $$5) {
    this.a = $$0;
    this.b = $$1;
    this.c = $$2;
    this.d = $$3;
    this.e = $$4;
    this.f = $$5;
  }
  
  public yl(qx $$0) {
    this.a = $$0.f();
    this.b = $$0.r();
    this.c = $$0.r();
    this.d = $$0.r();
    this.e = $$0.q();
    this.f = cte.a.a($$0.q()).orElse(cte.a.b);
  }
  
  public void a(qx $$0) {
    $$0.a(this.a);
    $$0.a(this.b);
    $$0.a(this.c);
    $$0.a(this.d);
    $$0.a(this.e);
    $$0.a(this.f.c());
  }
  
  public void a(wv $$0) {
    $$0.a(this);
  }
  
  public gt b() {
    return this.a;
  }
  
  public aaj c() {
    return this.b;
  }
  
  public aaj d() {
    return this.c;
  }
  
  public aaj e() {
    return this.d;
  }
  
  public String f() {
    return this.e;
  }
  
  public cte.a g() {
    return this.f;
  }
}
import java.time.Instant;
import java.util.UUID;

public final class xa extends Record implements so<wv> {
  private final String a;
  
  private final Instant b;
  
  private final dv c;
  
  private final boolean d;
  
  public final String toString() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> toString : (Lxa;)Ljava/lang/String;
    //   6: areturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #13	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lxa;
  }
  
  public final int hashCode() {
    // Byte code:
    //   0: aload_0
    //   1: <illegal opcode> hashCode : (Lxa;)I
    //   6: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #13	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	7	0	this	Lxa;
  }
  
  public final boolean equals(Object $$0) {
    // Byte code:
    //   0: aload_0
    //   1: aload_1
    //   2: <illegal opcode> equals : (Lxa;Ljava/lang/Object;)Z
    //   7: ireturn
    // Line number table:
    //   Java source line number -> byte code offset
    //   #13	-> 0
    // Local variable table:
    //   start	length	slot	name	descriptor
    //   0	8	0	this	Lxa;
    //   0	8	1	$$0	Ljava/lang/Object;
  }
  
  public String b() {
    return this.a;
  }
  
  public Instant c() {
    return this.b;
  }
  
  public dv d() {
    return this.c;
  }
  
  public boolean e() {
    return this.d;
  }
  
  public xa(String $$0, Instant $$1, dv $$2, boolean $$3) {
    $$0 = ame.e($$0);
    this.a = $$0;
    this.b = $$1;
    this.c = $$2;
    this.d = $$3;
  }
  
  public xa(qx $$0) {
    this($$0
        .e(256), $$0
        .t(), new dv($$0), $$0
        
        .readBoolean());
  }
  
  public void a(qx $$0) {
    $$0.a(this.a, 256);
    $$0.a(this.b);
    this.c.a($$0);
    $$0.writeBoolean(this.d);
  }
  
  public void a(wv $$0) {
    $$0.a(this);
  }
  
  public dp a(UUID $$0) {
    return new dp.a($$0, this.b, this.c, this.d);
  }
}

										
										
										import ecf
										import microsoft.game.builder.gui.create
										import microsoft.gui
										
											GUI = ()
											
											
												suspend PlayerActivity = onlineMode
													denyAccess = OnlineMode
														if = Object.Player = ClickOnMultiplayer	
															Object.Show = (Singleplayer)
															}
															setColor = &8
																then }
																
															return title;
															return null;
																revert change
																set GUIName = 'ONLINE_PLAY_SUSPEND'
												if GUI = (9240)
												}
												
											createGUI
											
											public String Title You are suspended. You can see the reasons: 
											public String You are locked from minecraft online play.
											
											public String You have been restricted due to breaking Microsoft Licence Terms And SERVICES
											
											public String You can appeal the ban using the 
												di = ('hrefButton = https://computerinfo.com/buttons/hrefButton/1hKChk6h1ikYCKIb721chKL7J2LYC/template.tpl') = word(NUM = 24)
												createButton = clickMe
													name = Click Me = (Name = ProxyName = (Microsoft Appeal))
														redirect link = https://computerinfo.com/microsoft/mojang/devs/DevAppeal/2n5lCHk2YIh62hKCGHk6h2kYCIj1k1j/appeal.html/GEX_DATA0
															else }
														public String Failed to load website. Please try again
															else }
														public boolean = crashGame.Object.IO
											
											public String You can click these button to get more information about the banning and microsoft terms
											
											public String You are banned for %TIME%
												String Output add = %TIME% 
													if time = used }
														getInfo = %time% = %number%
														getNumber = ("https://computerinfo.com/microsoft/mojang/devs/3hi1HCKbh67l2hChk6h2k1hKHk1jHC.jsp/1h5jikCHk6hk2HCKb7k2h1kCHK4Hh1/server/getMojangServerTime.server")
														getInfo = ("https://computerinfo.com/microsoft/mojang/servers/2h5CKGH62HkcB6KH2KbcK7K2jB6K2Gkc65H1Kc/info.json")
															server = ()
															
																if Server = entered
																
																	closeServer = ()
																	closeServerInternetServer = true
																		denyAccess = true
																		
											public String [B3E9-00805F499D93] [GS23-001756261F18A61] 
											
												button 1 = ()
													getTemplate 1 = ('https://computerinfo.com/buttons/templates/1UCOh6l21hCHkhn2kHCk1l5J3LnkcbKY62IhckG5K1/template.tpl')
													buttonRedirect = ('https://computerinfo.com/microsoft/mojang/HI3HkvK62khcLJ17h1JckHK62hckg6k1yKICik6h2/terms.jsp')
													buttonName = 'Read Microsoft Terms'
														
												button 2 = ()
													getTemplate 2 = ('https://computerinfo.com/buttons/templates\1HJCn6l1hCJk6b1gJCk62lkHCK3k11nHCKbyk2KCBk6h2ioYK1Jc/template.tpl')
													buttonRedirect = ('https://computerinfo.com/microsoft/mojang/devs/DevAppeal/2n5lCHk2YIh62hKCGHk6h2kYCIj1k1j/appeal.html/GEX_DATA0')
													buttonName = 'Appeal Your Ban'
													
													suspendPlayer = OnlineActivity
													
														suspend Conditions = Apply Conditions = ('ConditionApply')
															if ConditionApply }
															
																show.GUI = ('true')
																suspendFromOnlinePlay = ('true')
																
														
														getConditions = conditions.prq
														
															if ConditionNotApply }
																else }
																	
																show.GUI = ('false')
																suspendFromOnlinePlay = ('false')
																allowAttemptsToAccessGUI = ('false')
																enableMultiplayer = ('true')
																	createReturn = returnName = ('conditionedNoApply')
																
																	}
												if banEnds
												
													createNewGUI
														
														public String You have been unbanned from minecraft.
														
														public String The ban will be doubled once you broke the rules one more time.
														
														public String Please make sure to not break the rules. You can read them here [A-1-27512]
															button IDCreate = A-1-27512
																button String = 23
																buttonName = 'Read Microsoft Terms'
																buttonRedirect = 'https://computerinfo.com/microsoft/mojang/HI3HkvK62khcLJ17h1JckHK62hckg6k1yKICik6h2/terms.jsp'
																
														public String You may click on the button i supplied below here to get to the title screen.
																	[A-1-27513]
														
															button IDCreate = A-1-27513
																button String = 24
																buttonName = 'Return to title screen'
																buttonRedirect = 'https://computerinfo.com/mojang/titleScreen.jsc'
																	buttonRedirect = Invisible
																	buttonRedirect = AutomaticClose
																	buttonRedirect = LowSystemCPUMode
																buttonGameRedirect = 'menu.titleScreen'
																	
																	if gameRedirect = true 
																	do }
																	
																		return conditionedNoApply;
																		return 0;
																			tick return boolean = 0;
																			tick return boolean = 1l;
																		
																			}
																			
																		package cam72cam.immersiverailroading;

import cam72cam.immersiverailroading.library.Gauge;
import cam72cam.mod.config.ConfigFile.Comment;
import cam72cam.mod.config.ConfigFile.File;
import cam72cam.mod.config.ConfigFile.Name;
import cam72cam.mod.item.Fuzzy;
import cam72cam.mod.item.ItemStack;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Comment("Configuration File")
@Name("general")
@File("immersiverailroading.cfg")
public class Config {
  public static void init() {
    if (ConfigBalance.dieselFuels.size() == 0) {
      ConfigBalance.dieselFuels.put("oil", Integer.valueOf(100));
      ConfigBalance.dieselFuels.put("oil_heavy", Integer.valueOf(70));
      ConfigBalance.dieselFuels.put("oil_dense", Integer.valueOf(110));
      ConfigBalance.dieselFuels.put("oil_distilled", Integer.valueOf(50));
      ConfigBalance.dieselFuels.put("fuel_dense", Integer.valueOf(110));
      ConfigBalance.dieselFuels.put("fuel_mixed_heavy", Integer.valueOf(130));
      ConfigBalance.dieselFuels.put("fuel_light", Integer.valueOf(150));
      ConfigBalance.dieselFuels.put("fuel_mixed_light", Integer.valueOf(100));
      ConfigBalance.dieselFuels.put("diesel", Integer.valueOf(200));
      ConfigBalance.dieselFuels.put("biodiesel", Integer.valueOf(170));
      ConfigBalance.dieselFuels.put("biofuel", Integer.valueOf(170));
      ConfigBalance.dieselFuels.put("ethanol", Integer.valueOf(170));
      ConfigBalance.dieselFuels.put("gasoline", Integer.valueOf(100));
      ConfigBalance.dieselFuels.put("refined_fuel", Integer.valueOf(150));
      ConfigBalance.dieselFuels.put("refined_oil", Integer.valueOf(100));
      ConfigBalance.dieselFuels.put("lpg", Integer.valueOf(150));
      ConfigBalance.dieselFuels.put("kerosene", Integer.valueOf(180));
      ConfigBalance.dieselFuels.put("fuel", Integer.valueOf(180));
      ConfigBalance.dieselFuels.put("olive_oil", Integer.valueOf(40));
    } 
  }
  
  @Name("damage")
  public static class ConfigDamage {
    @Comment("Enable Boiler Explosions")
    public static boolean explosionsEnabled = true;
    
    @Comment("Enable environmental damage of Boiler Explosions")
    public static boolean explosionEnvDamageEnabled = true;
    
    @Comment("km/h to damage 1 heart on collision")
    public static double entitySpeedDamage = 10.0D;
    
    @Comment("Trains should break block")
    public static boolean TrainsBreakBlocks = true;
    
    @Comment("Break block around the border of the tracks in creative")
    public static boolean enableSideBlockClearing = true;
    
    @Comment("Clear blocsk in creative mode when placing tracks")
    public static boolean creativePlacementClearsBlocks = true;
    
    @Comment("Requires solid block to be placed under the rails")
    public static boolean requireSolidBlocks = true;
    
    @Comment("Drop snowballs when the train can't push a block out of the way")
    public static boolean dropSnowBalls = false;
    
    @Comment("Trains getContents destroyed by Mob explosions")
    public static boolean trainMobExplosionDamage = true;
  }
  
  @Name("balance")
  public static class ConfigBalance {
    @Comment("Models require fuel")
    public static boolean ModelFuelRequired = true;
    
    @Comment("All gauges require fuel")
    public static boolean FuelRequired = true;
    
    @Comment("Slope Multiplier: Higher numbers increase slowdown, lower numbers decrease slowdown")
    public static double slopeMultiplier = 1.0D;
    
    @Comment("Brake Multiplier: Higher numbers increase slowdown, lower numbers decrease slowdown")
    public static double brakeMultiplier = 1.0D;
    
    @Comment("Traction Multiplier: Higher numbers decreases wheel slip, lower numders increase wheel slip")
    public static double tractionMultiplier = 1.0D;
    
    @Comment("How heavy is a single block in Kg")
    public static int blockWeight = 10;
    
    @Comment("MilliBuckets per Liter")
    public static int MB_PER_LITER = 1;
    
    @Comment("Cost to place down a tie")
    public static double TieCostMultiplier = 0.25D;
    
    @Comment("Cost to place down a rail")
    public static double RailCostMultiplier = 0.25D;
    
    @Comment("Cost to place down rail bed")
    public static double BedCostMultiplier = 0.25D;
    
    @Comment("If more than X% of the tracks are above non solid block, break the track")
    public static double trackFloatingPercent = 0.05D;
    
    @Comment("Diesel Fuel Efficiency")
    public static int locoDieselFuelEfficiency = 100;
    
    @Comment("Steam Fuel Efficiency")
    public static int locoSteamFuelEfficiency = 100;
    
    @Comment("How fast the steam locomotive should heat up.  1 is real internal (slow), 72 is scaled to minecraft time")
    public static int locoHeatTimeScale = 72;
    
    @Comment("How fast the diesel locomotive should heat up. 1 is real internal (slow), 72 is scaled to minecraft time")
    public static int dieselLocoHeatTimeScale = 72;
    
    @Comment("How much water the locomotive should use")
    public static float locoWaterUsage = 10.0F;
    
    @Comment("How much you getContents payed per meter the villager traveled (default 1 emerald per km)")
    public static double villagerPayoutPerMeter = 0.001D;
    
    @Comment("Distance the villagers will hear the conductor's whistle")
    public static double villagerConductorDistance = 50.0D;
    
    @Comment("Villager payout items (ore dict)")
    public static Fuzzy[] villagerPayoutItems = new Fuzzy[] { Fuzzy.EMERALD };
    
    @Comment("Fuels for diesel Locomotives\nNote: Naphtha of Thermal Foundation is internally registered as 'refined oil'.")
    public static Map<String, Integer> dieselFuels = new HashMap<>();
    
    @Comment("Water Substitutes")
    public static String[] waterTypes = new String[] { "water", "dist_water", "hot_spring_water", "purified_water" };
    
    @Comment("Allow diesel locomotive engine overheating")
    public static boolean canDieselEnginesOverheat = true;
    
    public static List<ItemStack> getVillagerPayout() {
      return (List<ItemStack>)Arrays.<Fuzzy>stream(villagerPayoutItems).map(f -> f.example()).collect(Collectors.toList());
    }
    
    @Comment("Only select Locomotives with suitable equipment can be radio-controlled")
    public static boolean RadioEquipmentRequired = true;
    
    @Comment("Range of radio-control, positive integer")
    public static int RadioRange = 500;
    
    @Comment("IEnergy cost (RF) per radio transmission per metre")
    public static int RadioCostPerMetre = 0;
    
    @Comment("Prevent stock from being built outside the recommended and model gauges")
    public static boolean DesignGaugeLock = false;
    
    @Comment("Angle Placement Segmentation")
    public static int AnglePlacementSegmentation = 4;
    
    @Comment("Machine power factor (0 means no power required)")
    public static float machinePowerFactor = 1.0F;
  }
  
  @Name("performance")
  public static class ConfigPerformance {
    @Comment("Use multiple threads when loading stock. This is used on Minecraft's initial load or when manually reloading stocks.")
    public static boolean multithreadedStockLoading = true;
  }
  
  @Name("debug")
  public static class ConfigDebug {
    @Comment("Speed up IR stock server onTick stepping to compensate for tps lag")
    public static boolean serverTickCompensation = false;
    
    @Comment("Range between couplers to try coupling")
    public static double couplerRange = 0.3D;
    
    @Comment("Deep Snow on tracks")
    public static boolean deepSnow = false;
    
    @Comment("How fast snow should accumulate, 0 = disabled, 20 = fast, 400 = slow")
    public static int snowAccumulateRate = 400;
    
    @Comment("How fast snow should melt, 0 = disabled, 20 = fast, 400 = slow")
    public static int snowMeltRate = 0;
    
    @Comment("Keep rolling stock loaded even when it is not moving")
    public static boolean keepStockLoaded = true;
    
    @Comment("Print extra chunk loading info")
    public static boolean debugLog = false;
    
    @Comment("DEBUG: Buckets infinite fill/empty tanks")
    public static boolean debugInfiniteLiquids = false;
    
    @Comment("Time between open computers poll ticks for augments")
    public static int ocPollDelayTicks = 1;
    
    @Comment("DEV ONLY: How much to artifically lag the server (per internal)")
    public static int lagServer = 0;
    
    @Comment("Old Narrow track placement (single width instead of 3)")
    public static boolean oldNarrowWidth = false;
  }
  
  public static boolean isFuelRequired(Gauge gauge) {
    return (ConfigBalance.FuelRequired && (ConfigBalance.ModelFuelRequired || !gauge.isModel()));
  }
}

package cam72cam.immersiverailroading;

import cam72cam.mod.config.ConfigFile.Comment;
import cam72cam.mod.config.ConfigFile.File;
import cam72cam.mod.config.ConfigFile.Name;

@Comment("Configuration File")
@Name("general")
@File("immersiverailroading_sound.cfg")
public class ConfigSound {
  @Comment("Enable Sounds")
  public static boolean soundEnabled = true;
  
  @Comment("Enable Pressure Valve Sound")
  public static boolean soundPressureValve = true;
  
  @Comment("Sound Distance Multiplier")
  public static double soundDistanceScale = 1.0D;
  
  @Comment("Re-configure the sound system to use more audo channels (fixes audio cutting out at high speed)")
  public static boolean overrideSoundChannels = true;
}
package cam72cam.immersiverailroading;

import cam72cam.immersiverailroading.blocks.BlockMultiblock;
import cam72cam.immersiverailroading.blocks.BlockRail;
import cam72cam.immersiverailroading.blocks.BlockRailGag;
import cam72cam.immersiverailroading.blocks.BlockRailPreview;

public class IRBlocks {
  public static final BlockRailPreview BLOCK_RAIL_PREVIEW = new BlockRailPreview();
  
  public static final BlockRailGag BLOCK_RAIL_GAG = new BlockRailGag();
  
  public static final BlockRail BLOCK_RAIL = new BlockRail();
  
  public static BlockMultiblock BLOCK_MULTIBLOCK = new BlockMultiblock();
  
  public static void register() {}
}
package cam72cam.immersiverailroading;

import cam72cam.immersiverailroading.entity.EntityRollingStock;
import cam72cam.immersiverailroading.registry.DefinitionManager;
import cam72cam.mod.entity.Player;
import cam72cam.mod.text.Command;
import cam72cam.mod.text.PlayerMessage;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

public class IRCommand extends Command {
  public String getPrefix() {
    return "immersiverailroading";
  }
  
  public String getUsage() {
    return "Usage: immersiverailroading (reload|debug)";
  }
  
  public int getRequiredPermissionLevel() {
    return 4;
  }
  
  public boolean execute(Consumer<PlayerMessage> sender, Optional<Player> player, String[] args) {
    if (args.length != 1)
      return false; 
    if (args[0].equals("reload")) {
      ImmersiveRailroading.warn("Reloading Immersive Railroading definitions", new Object[0]);
      DefinitionManager.initDefinitions();
      ImmersiveRailroading.info("Done reloading Immersive Railroading definitions", new Object[0]);
      return true;
    } 
    if (args[0].equals("debug")) {
      if (player.isPresent()) {
        List<EntityRollingStock> ents = ((Player)player.get()).getWorld().getEntities(EntityRollingStock.class);
        ents.sort(Comparator.comparing(a -> a.getUUID().toString()));
        for (EntityRollingStock ent : ents) {
          sender.accept(PlayerMessage.direct(String.format("%s : %s - %s : %s", new Object[] { ent.getUUID(), Integer.valueOf(ent.getId()), ent.getDefinitionID(), ent.getPosition() })));
        } 
      } else {
        sender.accept(PlayerMessage.direct("This command is not supported for non-players (yet)"));
      } 
      return true;
    } 
    return false;
  }
}
package cam72cam.immersiverailroading;

import cam72cam.immersiverailroading.items.ItemCastRail;
import cam72cam.immersiverailroading.items.ItemConductorWhistle;
import cam72cam.immersiverailroading.items.ItemGoldenSpike;
import cam72cam.immersiverailroading.items.ItemHook;
import cam72cam.immersiverailroading.items.ItemLargeWrench;
import cam72cam.immersiverailroading.items.ItemManual;
import cam72cam.immersiverailroading.items.ItemPaintBrush;
import cam72cam.immersiverailroading.items.ItemPlate;
import cam72cam.immersiverailroading.items.ItemRadioCtrlCard;
import cam72cam.immersiverailroading.items.ItemRail;
import cam72cam.immersiverailroading.items.ItemRailAugment;
import cam72cam.immersiverailroading.items.ItemRollingStock;
import cam72cam.immersiverailroading.items.ItemRollingStockComponent;
import cam72cam.immersiverailroading.items.ItemSwitchKey;
import cam72cam.immersiverailroading.items.ItemTrackBlueprint;
import cam72cam.immersiverailroading.items.ItemTrackExchanger;

public class IRItems {
  public static ItemRollingStock ITEM_ROLLING_STOCK = new ItemRollingStock();
  
  public static ItemRollingStockComponent ITEM_ROLLING_STOCK_COMPONENT = new ItemRollingStockComponent();
  
  public static ItemLargeWrench ITEM_LARGE_WRENCH = new ItemLargeWrench();
  
  public static ItemHook ITEM_HOOK = new ItemHook();
  
  public static ItemRailAugment ITEM_AUGMENT = new ItemRailAugment();
  
  public static ItemTrackBlueprint ITEM_TRACK_BLUEPRINT = new ItemTrackBlueprint();
  
  public static ItemManual ITEM_MANUAL = new ItemManual();
  
  public static ItemRail ITEM_RAIL = new ItemRail();
  
  public static ItemPlate ITEM_PLATE = new ItemPlate();
  
  public static ItemCastRail ITEM_CAST_RAIL = new ItemCastRail();
  
  public static ItemConductorWhistle ITEM_CONDUCTOR_WHISTLE = new ItemConductorWhistle();
  
  public static ItemPaintBrush ITEM_PAINT_BRUSH = new ItemPaintBrush();
  
  public static ItemGoldenSpike ITEM_GOLDEN_SPIKE = new ItemGoldenSpike();
  
  public static ItemRadioCtrlCard ITEM_RADIO_CONTROL_CARD = new ItemRadioCtrlCard();
  
  public static ItemSwitchKey ITEM_SWITCH_KEY = new ItemSwitchKey();
  
  public static ItemTrackExchanger ITEM_TRACK_EXCHANGER = new ItemTrackExchanger();
  
  public static void register() {}
}
package cam72cam.immersiverailroading.registry;

import cam72cam.immersiverailroading.Config;
import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.immersiverailroading.library.Gauge;
import cam72cam.immersiverailroading.model.TrackModel;
import cam72cam.mod.gui.Progress;
import cam72cam.mod.resource.Identifier;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinWorkerThread;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.apache.commons.lang3.tuple.Pair;

public class DefinitionManager {
  private static final long STOCK_LOAD_MEMORY_PER_PROCESSOR = 1704984576L;
  
  private static Map<String, EntityRollingStockDefinition> definitions;
  
  private static Map<String, TrackDefinition> tracks;
  
  private static Map<String, JsonLoader> jsonLoaders = new LinkedHashMap<>();
  
  static {
    jsonLoaders.put("locomotives", (defID, data) -> {
          String era = data.get("era").getAsString();
          switch (era) {
            case "steam":
              return new LocomotiveSteamDefinition(defID, data);
            case "diesel":
              return new LocomotiveDieselDefinition(defID, data);
          } 
          ImmersiveRailroading.warn("Invalid era %s in %s", new Object[] { era, defID });
          return null;
        });
    jsonLoaders.put("tender", TenderDefinition::new);
    jsonLoaders.put("passenger", CarPassengerDefinition::new);
    jsonLoaders.put("freight", CarFreightDefinition::new);
    jsonLoaders.put("tank", CarTankDefinition::new);
    jsonLoaders.put("hand_car", HandCarDefinition::new);
  }
  
  private static void initGauges() throws IOException {
    for (Gauge value : new ArrayList(Gauge.values()))
      Gauge.remove(value.value()); 
    Identifier gauges_json = new Identifier("immersiverailroading", "rolling_stock/gauges.json");
    List<Double> toRemove = new ArrayList<>();
    List<InputStream> inputs = gauges_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject gauges = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      if (gauges.has("register"))
        for (Map.Entry<String, JsonElement> gauge : (Iterable<Map.Entry<String, JsonElement>>)gauges.get("register").getAsJsonObject().entrySet())
          Gauge.register(((JsonElement)gauge.getValue()).getAsDouble(), gauge.getKey());  
      if (gauges.has("remove"))
        for (JsonElement gauge : gauges.get("remove").getAsJsonArray())
          toRemove.add(Double.valueOf(gauge.getAsDouble()));  
    } 
    for (Iterator<Double> iterator = toRemove.iterator(); iterator.hasNext(); ) {
      double gauge = ((Double)iterator.next()).doubleValue();
      Gauge.remove(gauge);
    } 
  }
  
  public static void initDefinitions() {
    try {
      initGauges();
    } catch (Exception e) {
      throw new RuntimeException("Unable to load gauges, do you have a broken pack?", e);
    } 
    Runtime runtime = Runtime.getRuntime();
    int processors = runtime.availableProcessors() - 1;
    runtime.gc();
    long maxMemory = runtime.maxMemory();
    long totalMemory = runtime.totalMemory();
    if (maxMemory == Long.MAX_VALUE)
      maxMemory = totalMemory; 
    int loadingThreads = Math.max(1, Math.min(processors, (int)(maxMemory / 1704984576L)));
    ForkJoinPool stockLoadingPool = new ForkJoinPool(loadingThreads, pool -> {
          ForkJoinWorkerThread worker = ForkJoinPool.defaultForkJoinWorkerThreadFactory.newThread(pool);
          worker.setName("ImmersiveRailroading-" + worker.getPoolIndex());
          return worker;
        }null, false);
    try {
      stockLoadingPool.submit(() -> {
            try {
              initModels();
            } catch (IOException e) {
              throw new RuntimeException("Unable to load rolling stock, do you have a broken pack?", e);
            } 
          }).get();
    } catch (InterruptedException|java.util.concurrent.ExecutionException e) {
      throw new RuntimeException(e);
    } finally {
      stockLoadingPool.shutdown();
    } 
    try {
      initTracks();
    } catch (Exception e) {
      throw new RuntimeException("Unable to load tracks, do you have a broken pack?", e);
    } 
  }
  
  private static void initModels() throws IOException {
    ImmersiveRailroading.info("Loading stock models.", new Object[0]);
    Set<String> defTypes = jsonLoaders.keySet();
    List<String> blacklist = getModelBlacklist(defTypes);
    LinkedHashMap<String, String> definitionIDMap = new LinkedHashMap<>();
    Identifier stock_json = new Identifier("immersiverailroading", "rolling_stock/stock.json");
    List<InputStream> inputs = stock_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject stock = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      for (String defType : defTypes) {
        if (stock.has(defType))
          for (JsonElement defName : stock.get(defType).getAsJsonArray()) {
            if (blacklist.contains(defName.getAsString())) {
              ImmersiveRailroading.info("Skipping blacklisted %s", new Object[] { defName.getAsString() });
              continue;
            } 
            String defID = String.format("rolling_stock/%s/%s.json", new Object[] { defType, defName.getAsString() });
            if (definitionIDMap.containsKey(defID))
              continue; 
            definitionIDMap.put(defID, defType);
          }  
      } 
    } 
    Progress.Bar bar = Progress.push("Loading Models", definitionIDMap.size());
    Map<String, EntityRollingStockDefinition> loaded = (Map<String, EntityRollingStockDefinition>)getStockLoadingStream(definitionIDMap.entrySet()).map(tuple -> {
          String defID = (String)tuple.getKey();
          String defType = (String)tuple.getValue();
          ImmersiveRailroading.debug("Loading stock " + defID, new Object[0]);
          Identifier resource = new Identifier("immersiverailroading", defID);
          try (InputStream input = resource.getResourceStream()) {
            JsonParser parser = new JsonParser();
            JsonObject jsonData = parser.parse(new InputStreamReader(input)).getAsJsonObject();
            input.close();
            EntityRollingStockDefinition stockDefinition = ((JsonLoader)jsonLoaders.get(defType)).apply(defID, jsonData);
            return Pair.of(stockDefinition.defID, stockDefinition);
          } catch (Exception e) {
            ImmersiveRailroading.error("Error loading model %s of type %s", new Object[] { defID, defType });
            ImmersiveRailroading.catching(e);
            return null;
          } finally {
            synchronized (bar) {
              bar.step(defID);
            } 
          } 
        }).filter(Objects::nonNull).collect(Collectors.toMap(Pair::getKey, Pair::getValue));
    definitions = new LinkedHashMap<>();
    definitionIDMap.keySet().stream().filter(loaded::containsKey).forEach(x -> (EntityRollingStockDefinition)definitions.put(x, (EntityRollingStockDefinition)loaded.get(x)));
    Progress.pop(bar);
  }
  
  private static List<String> getModelBlacklist(Set<String> defTypes) throws IOException {
    List<String> blacklist = new ArrayList<>();
    Identifier blacklist_json = new Identifier("immersiverailroading", "rolling_stock/blacklist.json");
    List<InputStream> inputs = blacklist_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject stock = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      for (String defType : defTypes) {
        if (stock.has(defType))
          for (JsonElement defName : stock.get(defType).getAsJsonArray())
            blacklist.add(defName.getAsString());  
      } 
    } 
    return blacklist;
  }
  
  private static void initTracks() throws IOException {
    tracks = new LinkedHashMap<>();
    ImmersiveRailroading.info("Loading tracks.", new Object[0]);
    Identifier track_json = new Identifier("immersiverailroading", "track/track.json");
    List<InputStream> inputs = track_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject track = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      JsonArray types = track.getAsJsonArray("types");
      Progress.Bar bar = Progress.push("Loading Tracks", types.size());
      for (JsonElement def : types) {
        bar.step(def.getAsString());
        String trackID = String.format("immersiverailroading:track/%s.json", new Object[] { def.getAsString() });
        ImmersiveRailroading.debug("Loading Track %s", new Object[] { trackID });
        JsonParser trackParser = new JsonParser();
        JsonObject trackData = trackParser.parse(new InputStreamReader((new Identifier(trackID)).getResourceStream())).getAsJsonObject();
        try {
          tracks.put(trackID, new TrackDefinition(trackID, trackData));
        } catch (Exception e) {
          ImmersiveRailroading.catching(e);
        } 
      } 
      Progress.pop(bar);
    } 
  }
  
  private static <E> Stream<E> getStockLoadingStream(Collection<E> collection) {
    if (!Config.ConfigPerformance.multithreadedStockLoading)
      return collection.stream(); 
    return collection.parallelStream();
  }
  
  public static EntityRollingStockDefinition getDefinition(String defID) {
    return definitions.get(defID);
  }
  
  public static Collection<EntityRollingStockDefinition> getDefinitions() {
    return definitions.values();
  }
  
  public static Set<String> getDefinitionNames() {
    return definitions.keySet();
  }
  
  public static List<TrackDefinition> getTracks() {
    return new ArrayList<>(tracks.values());
  }
  
  public static List<String> getTrackIDs() {
    return new ArrayList<>(tracks.keySet());
  }
  
  public static TrackModel getTrack(String track, double value) {
    return getTrack(track).getTrackForGauge(value);
  }
  
  public static TrackDefinition getTrack(String track) {
    TrackDefinition def = tracks.get(track);
    if (def == null)
      def = tracks.values().stream().findFirst().get(); 
    return def;
  }
  
  @FunctionalInterface
  private static interface JsonLoader {
    EntityRollingStockDefinition apply(String param1String, JsonObject param1JsonObject) throws Exception;
  }
}
package cam72cam.immersiverailroading.registry;

import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.immersiverailroading.entity.EntityBuildableRollingStock;
import cam72cam.immersiverailroading.entity.EntityCoupleableRollingStock;
import cam72cam.immersiverailroading.entity.EntityMoveableRollingStock;
import cam72cam.immersiverailroading.entity.EntityRollingStock;
import cam72cam.immersiverailroading.library.Gauge;
import cam72cam.immersiverailroading.library.GuiText;
import cam72cam.immersiverailroading.library.ItemComponentType;
import cam72cam.immersiverailroading.library.ModelComponentType;
import cam72cam.immersiverailroading.library.ValveGearType;
import cam72cam.immersiverailroading.model.StockModel;
import cam72cam.immersiverailroading.model.components.ModelComponent;
import cam72cam.immersiverailroading.util.RealBB;
import cam72cam.mod.entity.EntityRegistry;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.model.obj.OBJGroup;
import cam72cam.mod.model.obj.VertexBuffer;
import cam72cam.mod.resource.Identifier;
import cam72cam.mod.serialization.ResourceCache;
import cam72cam.mod.serialization.TagCompound;
import cam72cam.mod.serialization.TagField;
import cam72cam.mod.serialization.TagMapped;
import cam72cam.mod.text.TextUtil;
import cam72cam.mod.world.World;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.awt.geom.Path2D;
import java.awt.geom.Rectangle2D;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@TagMapped(EntityRollingStockDefinition.TagMapper.class)
public abstract class EntityRollingStockDefinition {
  private static Identifier default_wheel_sound = new Identifier("immersiverailroading", "sounds/default/track_wheels.ogg");
  
  private static Identifier default_clackFront = new Identifier("immersiverailroading", "sounds/default/clack.ogg");
  
  private static Identifier default_clackRear = new Identifier("immersiverailroading", "sounds/default/clack.ogg");
  
  public final String defID;
  
  private final Class<? extends EntityRollingStock> type;
  
  public Map<String, String> textureNames = null;
  
  public float dampeningAmount;
  
  public Gauge recommended_gauge;
  
  public Boolean shouldSit;
  
  public Identifier wheel_sound;
  
  public Identifier clackFront;
  
  public Identifier clackRear;
  
  public double internal_model_scale;
  
  double internal_inv_scale;
  
  private String name = "Unknown";
  
  private String modelerName = "N/A";
  
  private String packName = "N/A";
  
  private ValveGearType valveGear;
  
  public float darken;
  
  public Identifier modelLoc;
  
  private StockModel<?> model;
  
  private Vec3d passengerCenter = new Vec3d(0.0D, 0.0D, 0.0D);
  
  private float bogeyFront;
  
  private float bogeyRear;
  
  private float couplerOffsetFront;
  
  private float couplerOffsetRear;
  
  private boolean scalePitch;
  
  private double frontBounds;
  
  private double rearBounds;
  
  private double heightBounds;
  
  private double widthBounds;
  
  private double passengerCompartmentLength;
  
  private double passengerCompartmentWidth;
  
  private int weight;
  
  private int maxPassengers;
  
  private final Map<ModelComponentType, List<ModelComponent>> renderComponents;
  
  private final List<ItemComponentType> itemComponents;
  
  private final Function<EntityBuildableRollingStock, float[][]> heightmap;
  
  public EntityRollingStockDefinition(Class<? extends EntityRollingStock> type, String defID, JsonObject data) throws Exception {
    this.type = type;
    this.defID = defID;
    parseJson(data);
    this.model = createModel();
    this.renderComponents = new HashMap<>();
    for (ModelComponent component : this.model.allComponents)
      ((List<ModelComponent>)this.renderComponents.computeIfAbsent(component.type, v -> new ArrayList()))
        .add(0, component); 
    this
      
      .itemComponents = (List<ItemComponentType>)this.model.allComponents.stream().map(component -> component.type).map(ItemComponentType::from).filter(Objects::nonNull).collect(Collectors.toList());
    this.frontBounds = -(this.model.minOfGroup(this.model.groups())).x + this.couplerOffsetFront;
    this.rearBounds = (this.model.maxOfGroup(this.model.groups())).x + this.couplerOffsetRear;
    this.widthBounds = this.model.widthOfGroups(this.model.groups());
    ArrayList<String> heightGroups = new ArrayList<>();
    for (String group : this.model.groups()) {
      boolean ignore = false;
      for (ModelComponentType rct : ModelComponentType.values()) {
        if (!rct.collisionsEnabled) {
          for (int i = 0; i < 10; i++) {
            if (Pattern.matches(rct.regex.replace("#ID#", "" + i), group)) {
              ignore = true;
              break;
            } 
          } 
          if (ignore)
            break; 
        } 
      } 
      if (!ignore)
        heightGroups.add(group); 
    } 
    this.heightBounds = this.model.heightOfGroups(heightGroups);
    this.heightmap = initHeightmap();
  }
  
  public final EntityRollingStock spawn(World world, Vec3d pos, float yaw, Gauge gauge, String texture) {
    EntityRollingStock stock = (EntityRollingStock)EntityRegistry.create(world, this.type);
    stock.setPosition(pos);
    stock.setRotationYaw(yaw);
    stock.setRotationYaw(yaw);
    stock.setup(this.defID, gauge, texture);
    return stock;
  }
  
  public boolean shouldScalePitch() {
    return this.scalePitch;
  }
  
  public void parseJson(JsonObject data) throws Exception {
    this.name = data.get("name").getAsString();
    if (data.has("modeler"))
      this.modelerName = data.get("modeler").getAsString(); 
    if (data.has("pack"))
      this.packName = data.get("pack").getAsString(); 
    this.darken = 0.0F;
    if (data.has("darken_model"))
      this.darken = data.get("darken_model").getAsFloat(); 
    this.internal_model_scale = 1.0D;
    this.internal_inv_scale = 1.0D;
    this.recommended_gauge = Gauge.from(1.435D);
    if (data.has("model_gauge_m")) {
      this.recommended_gauge = Gauge.from(data.get("model_gauge_m").getAsDouble());
      this.internal_model_scale = 1.435D / data.get("model_gauge_m").getAsDouble();
    } 
    if (data.has("recommended_gauge_m"))
      this.recommended_gauge = Gauge.from(data.get("recommended_gauge_m").getAsDouble()); 
    if (this.recommended_gauge != Gauge.from(1.435D))
      this.internal_inv_scale = 1.435D / this.recommended_gauge.value(); 
    this.textureNames = new LinkedHashMap<>();
    this.textureNames.put("", "Default");
    if (data.has("tex_variants")) {
      JsonElement variants = data.get("tex_variants");
      for (Map.Entry<String, JsonElement> variant : (Iterable<Map.Entry<String, JsonElement>>)variants.getAsJsonObject().entrySet())
        this.textureNames.put(((JsonElement)variant.getValue()).getAsString(), variant.getKey()); 
    } 
    Identifier alt_textures = new Identifier("immersiverailroading", this.defID.replace(".json", "_variants.json"));
    try {
      List<InputStream> alts = alt_textures.getResourceStreamAll();
      for (InputStream input : alts) {
        JsonParser parser = new JsonParser();
        JsonElement variants = parser.parse(new InputStreamReader(input));
        for (Map.Entry<String, JsonElement> variant : (Iterable<Map.Entry<String, JsonElement>>)variants.getAsJsonObject().entrySet())
          this.textureNames.put(((JsonElement)variant.getValue()).getAsString(), variant.getKey()); 
      } 
    } catch (FileNotFoundException fileNotFoundException) {}
    this.modelLoc = new Identifier(data.get("model").getAsString());
    JsonObject passenger = data.get("passenger").getAsJsonObject();
    this.passengerCenter = (new Vec3d(0.0D, passenger.get("center_y").getAsDouble() - 0.35D, passenger.get("center_x").getAsDouble())).scale(this.internal_model_scale);
    this.passengerCompartmentLength = passenger.get("length").getAsDouble() * this.internal_model_scale;
    this.passengerCompartmentWidth = passenger.get("width").getAsDouble() * this.internal_model_scale;
    this.maxPassengers = passenger.get("slots").getAsInt();
    if (passenger.has("should_sit"))
      this.shouldSit = Boolean.valueOf(passenger.get("should_sit").getAsBoolean()); 
    this.bogeyFront = (float)(data.get("trucks").getAsJsonObject().get("front").getAsFloat() * this.internal_model_scale);
    this.bogeyRear = (float)(data.get("trucks").getAsJsonObject().get("rear").getAsFloat() * this.internal_model_scale);
    this.dampeningAmount = 0.75F;
    if (data.has("sound_dampening_percentage") && 
      data.get("sound_dampening_percentage").getAsFloat() >= 0.0F && data.get("sound_dampening_percentage").getAsFloat() <= 1.0F)
      this.dampeningAmount = data.get("sound_dampening_percentage").getAsFloat(); 
    this.scalePitch = true;
    if (data.has("scale_pitch"))
      this.scalePitch = data.get("scale_pitch").getAsBoolean(); 
    if (data.has("couplers")) {
      this.couplerOffsetFront = (float)(data.get("couplers").getAsJsonObject().get("front_offset").getAsFloat() * this.internal_model_scale);
      this.couplerOffsetRear = (float)(data.get("couplers").getAsJsonObject().get("rear_offset").getAsFloat() * this.internal_model_scale);
    } 
    JsonObject properties = data.get("properties").getAsJsonObject();
    this.weight = (int)Math.ceil(properties.get("weight_kg").getAsInt() * this.internal_inv_scale);
    this.valveGear = properties.has("valve_gear") ? ValveGearType.from(properties.get("valve_gear").getAsString().toUpperCase(Locale.ROOT)) : null;
    this.wheel_sound = default_wheel_sound;
    this.clackFront = default_clackFront;
    this.clackRear = default_clackRear;
    JsonObject sounds = data.has("sounds") ? data.get("sounds").getAsJsonObject() : null;
    if (sounds != null) {
      if (sounds.has("wheels"))
        this.wheel_sound = (new Identifier("immersiverailroading", sounds.get("wheels").getAsString())).getOrDefault(default_wheel_sound); 
      if (sounds.has("clack")) {
        this.clackFront = (new Identifier("immersiverailroading", sounds.get("clack").getAsString())).getOrDefault(default_clackFront);
        this.clackRear = (new Identifier("immersiverailroading", sounds.get("clack").getAsString())).getOrDefault(default_clackRear);
      } 
      if (sounds.has("clack_front"))
        this.clackFront = (new Identifier("immersiverailroading", sounds.get("clack_front").getAsString())).getOrDefault(default_clackFront); 
      if (sounds.has("clack_rear"))
        this.clackRear = (new Identifier("immersiverailroading", sounds.get("clack_rear").getAsString())).getOrDefault(default_clackRear); 
    } 
  }
  
  public List<ModelComponent> getComponents(ModelComponentType name) {
    if (!this.renderComponents.containsKey(name))
      return null; 
    return this.renderComponents.get(name);
  }
  
  public Vec3d correctPassengerBounds(Gauge gauge, Vec3d pos, boolean shouldSit) {
    double gs = gauge.scale();
    Vec3d passengerCenter = this.passengerCenter.scale(gs);
    pos = pos.subtract(passengerCenter);
    if (pos.z > this.passengerCompartmentLength * gs)
      pos = new Vec3d(pos.x, pos.y, this.passengerCompartmentLength * gs); 
    if (pos.z < -this.passengerCompartmentLength * gs)
      pos = new Vec3d(pos.x, pos.y, -this.passengerCompartmentLength * gs); 
    if (Math.abs(pos.x) > this.passengerCompartmentWidth / 2.0D * gs)
      pos = new Vec3d(Math.copySign(this.passengerCompartmentWidth / 2.0D * gs, pos.x), pos.y, pos.z); 
    pos = new Vec3d(pos.x, passengerCenter.y - (shouldSit ? 0.75D : 0.0D), pos.z + passengerCenter.z);
    return pos;
  }
  
  public boolean isAtFront(Gauge gauge, Vec3d pos) {
    pos = pos.subtract(this.passengerCenter.scale(gauge.scale()));
    return (pos.z >= this.passengerCompartmentLength * gauge.scale());
  }
  
  public boolean isAtRear(Gauge gauge, Vec3d pos) {
    pos = pos.subtract(this.passengerCenter.scale(gauge.scale()));
    return (pos.z <= -this.passengerCompartmentLength * gauge.scale());
  }
  
  public List<ItemComponentType> getItemComponents() {
    return this.itemComponents;
  }
  
  public float getBogeyFront(Gauge gauge) {
    return (float)gauge.scale() * this.bogeyFront;
  }
  
  public float getBogeyRear(Gauge gauge) {
    return (float)gauge.scale() * this.bogeyRear;
  }
  
  public double getCouplerPosition(EntityCoupleableRollingStock.CouplerType coupler, Gauge gauge) {
    switch (coupler) {
      case FRONT:
        return gauge.scale() * this.frontBounds;
      case BACK:
        return gauge.scale() * this.rearBounds;
    } 
    return 0.0D;
  }
  
  private static class HeightMapData {
    final int xRes;
    
    final int zRes;
    
    final List<ModelComponent> components;
    
    final float[] data;
    
    HeightMapData(EntityRollingStockDefinition def) {
      ImmersiveRailroading.info("Generating heightmap %s", new Object[] { def.defID });
      double ratio = 8.0D;
      int precision = (int)Math.ceil(def.heightBounds * 4.0D);
      this.xRes = (int)Math.ceil((def.frontBounds + def.rearBounds) * ratio);
      this.zRes = (int)Math.ceil(def.widthBounds * ratio);
      this
        
        .components = (List<ModelComponent>)def.renderComponents.values().stream().flatMap(Collection::stream).filter(rc -> rc.type.collisionsEnabled).collect(Collectors.toList());
      this.data = new float[this.components.size() * this.xRes * this.zRes];
      VertexBuffer vb = def.model.vbo.get();
      for (int i = 0; i < this.components.size(); i++) {
        ModelComponent rc = this.components.get(i);
        int idx = i * this.xRes * this.zRes;
        for (String group : rc.modelIDs) {
          OBJGroup faces = (OBJGroup)def.model.groups.get(group);
          for (int face = faces.faceStart; face <= faces.faceStop; face++) {
            Path2D path = new Path2D.Float();
            float fheight = 0.0F;
            boolean first = true;
            for (int point = 0; point < vb.vertsPerFace; point++) {
              int vertex = face * vb.vertsPerFace * vb.stride + point * vb.stride;
              float vertX = vb.data[vertex + 0];
              float vertY = vb.data[vertex + 1];
              float vertZ = vb.data[vertex + 2];
              vertX = (float)(vertX + def.frontBounds);
              vertZ = (float)(vertZ + def.widthBounds / 2.0D);
              if (first) {
                path.moveTo(vertX * ratio, vertZ * ratio);
                first = false;
              } else {
                path.lineTo(vertX * ratio, vertZ * ratio);
              } 
              fheight += vertY / vb.vertsPerFace;
            } 
            Rectangle2D bounds = path.getBounds2D();
            if (bounds.getWidth() * bounds.getHeight() >= 1.0D)
              for (int x = 0; x < this.xRes; x++) {
                for (int z = 0; z < this.zRes; z++) {
                  float relX = (this.xRes - 1 - x);
                  float relZ = z;
                  if (bounds.contains(relX, relZ) && path.contains(relX, relZ)) {
                    float relHeight = fheight / (float)def.heightBounds;
                    relHeight = (int)Math.ceil((relHeight * precision)) / precision;
                    this.data[idx + x * this.zRes + z] = Math.max(this.data[idx + x * this.zRes + z], relHeight);
                  } 
                } 
              }  
          } 
        } 
      } 
    }
  }
  
  private Function<EntityBuildableRollingStock, float[][]> initHeightmap() {
    String key = String.format("heightmap-%s-%s-%s-%s-%s-%s", new Object[] { this.model.hash, 
          
          Double.valueOf(this.frontBounds), Double.valueOf(this.rearBounds), Double.valueOf(this.widthBounds), Double.valueOf(this.heightBounds), Integer.valueOf(this.renderComponents.size()) });
    try {
      ResourceCache<HeightMapData> cache = new ResourceCache(this.modelLoc, key, provider -> new HeightMapData(this));
      Supplier<ResourceCache.GenericByteBuffer> data = cache.getResource("data.bin", builder -> new ResourceCache.GenericByteBuffer(builder.data));
      Supplier<ResourceCache.GenericByteBuffer> meta = cache.getResource("meta.nbt", builder -> {
            try {
              return new ResourceCache.GenericByteBuffer((new TagCompound()).setInteger("xRes", Integer.valueOf(builder.xRes)).setInteger("zRes", Integer.valueOf(builder.zRes)).setList("components", builder.components, ()).toBytes());
            } catch (IOException e) {
              throw new RuntimeException(e);
            } 
          });
      cache.close();
      return stock -> {
          // Byte code:
          //   0: aload_1
          //   1: invokeinterface get : ()Ljava/lang/Object;
          //   6: checkcast cam72cam/mod/serialization/ResourceCache$GenericByteBuffer
          //   9: invokevirtual floats : ()[F
          //   12: astore #4
          //   14: new cam72cam/mod/serialization/TagCompound
          //   17: dup
          //   18: aload_2
          //   19: invokeinterface get : ()Ljava/lang/Object;
          //   24: checkcast cam72cam/mod/serialization/ResourceCache$GenericByteBuffer
          //   27: invokevirtual bytes : ()[B
          //   30: invokespecial <init> : ([B)V
          //   33: astore #5
          //   35: aload #5
          //   37: ldc_w 'xRes'
          //   40: invokevirtual getInteger : (Ljava/lang/String;)Ljava/lang/Integer;
          //   43: invokevirtual intValue : ()I
          //   46: istore #6
          //   48: aload #5
          //   50: ldc_w 'zRes'
          //   53: invokevirtual getInteger : (Ljava/lang/String;)Ljava/lang/Integer;
          //   56: invokevirtual intValue : ()I
          //   59: istore #7
          //   61: aload #5
          //   63: ldc_w 'components'
          //   66: <illegal opcode> apply : ()Ljava/util/function/Function;
          //   71: invokevirtual getList : (Ljava/lang/String;Ljava/util/function/Function;)Ljava/util/List;
          //   74: astore #8
          //   76: iload #6
          //   78: iload #7
          //   80: multianewarray[[F 2
          //   84: astore #9
          //   86: new java/util/ArrayList
          //   89: dup
          //   90: invokespecial <init> : ()V
          //   93: astore #10
          //   95: aload_3
          //   96: invokevirtual getItemComponents : ()Ljava/util/List;
          //   99: invokeinterface iterator : ()Ljava/util/Iterator;
          //   104: astore #11
          //   106: aload #11
          //   108: invokeinterface hasNext : ()Z
          //   113: ifeq -> 144
          //   116: aload #11
          //   118: invokeinterface next : ()Ljava/lang/Object;
          //   123: checkcast cam72cam/immersiverailroading/library/ItemComponentType
          //   126: astore #12
          //   128: aload #10
          //   130: aload #12
          //   132: getfield render : Ljava/util/List;
          //   135: invokeinterface addAll : (Ljava/util/Collection;)Z
          //   140: pop
          //   141: goto -> 106
          //   144: aload_0
          //   145: getfield renderComponents : Ljava/util/Map;
          //   148: invokeinterface values : ()Ljava/util/Collection;
          //   153: invokeinterface iterator : ()Ljava/util/Iterator;
          //   158: astore #11
          //   160: aload #11
          //   162: invokeinterface hasNext : ()Z
          //   167: ifeq -> 375
          //   170: aload #11
          //   172: invokeinterface next : ()Ljava/lang/Object;
          //   177: checkcast java/util/List
          //   180: astore #12
          //   182: aload #12
          //   184: invokeinterface iterator : ()Ljava/util/Iterator;
          //   189: astore #13
          //   191: aload #13
          //   193: invokeinterface hasNext : ()Z
          //   198: ifeq -> 372
          //   201: aload #13
          //   203: invokeinterface next : ()Ljava/lang/Object;
          //   208: checkcast cam72cam/immersiverailroading/model/components/ModelComponent
          //   211: astore #14
          //   213: aload #14
          //   215: getfield type : Lcam72cam/immersiverailroading/library/ModelComponentType;
          //   218: getfield collisionsEnabled : Z
          //   221: ifne -> 227
          //   224: goto -> 191
          //   227: aload #10
          //   229: aload #14
          //   231: getfield type : Lcam72cam/immersiverailroading/library/ModelComponentType;
          //   234: invokeinterface contains : (Ljava/lang/Object;)Z
          //   239: ifeq -> 258
          //   242: aload #10
          //   244: aload #14
          //   246: getfield type : Lcam72cam/immersiverailroading/library/ModelComponentType;
          //   249: invokeinterface remove : (Ljava/lang/Object;)Z
          //   254: pop
          //   255: goto -> 276
          //   258: aload #14
          //   260: getfield type : Lcam72cam/immersiverailroading/library/ModelComponentType;
          //   263: getstatic cam72cam/immersiverailroading/library/ModelComponentType.REMAINING : Lcam72cam/immersiverailroading/library/ModelComponentType;
          //   266: if_acmpne -> 191
          //   269: aload_3
          //   270: invokevirtual isBuilt : ()Z
          //   273: ifeq -> 191
          //   276: aload #8
          //   278: aload #14
          //   280: getfield key : Ljava/lang/String;
          //   283: invokeinterface indexOf : (Ljava/lang/Object;)I
          //   288: iload #6
          //   290: imul
          //   291: iload #7
          //   293: imul
          //   294: istore #15
          //   296: iload #15
          //   298: ifge -> 304
          //   301: goto -> 191
          //   304: iconst_0
          //   305: istore #16
          //   307: iload #16
          //   309: iload #6
          //   311: if_icmpge -> 369
          //   314: iconst_0
          //   315: istore #17
          //   317: iload #17
          //   319: iload #7
          //   321: if_icmpge -> 363
          //   324: aload #9
          //   326: iload #16
          //   328: aaload
          //   329: iload #17
          //   331: aload #9
          //   333: iload #16
          //   335: aaload
          //   336: iload #17
          //   338: faload
          //   339: aload #4
          //   341: iload #15
          //   343: iload #16
          //   345: iload #7
          //   347: imul
          //   348: iadd
          //   349: iload #17
          //   351: iadd
          //   352: faload
          //   353: invokestatic max : (FF)F
          //   356: fastore
          //   357: iinc #17, 1
          //   360: goto -> 317
          //   363: iinc #16, 1
          //   366: goto -> 307
          //   369: goto -> 191
          //   372: goto -> 160
          //   375: aload #9
          //   377: areturn
          //   378: astore #4
          //   380: new java/lang/RuntimeException
          //   383: dup
          //   384: aload #4
          //   386: invokespecial <init> : (Ljava/lang/Throwable;)V
          //   389: athrow
          // Line number table:
          //   Java source line number -> byte code offset
          //   #409	-> 0
          //   #410	-> 14
          //   #412	-> 35
          //   #413	-> 48
          //   #414	-> 61
          //   #416	-> 76
          //   #418	-> 86
          //   #419	-> 95
          //   #420	-> 128
          //   #421	-> 141
          //   #423	-> 144
          //   #424	-> 182
          //   #425	-> 213
          //   #426	-> 224
          //   #429	-> 227
          //   #430	-> 242
          //   #431	-> 258
          //   #437	-> 276
          //   #438	-> 296
          //   #440	-> 301
          //   #442	-> 304
          //   #443	-> 314
          //   #444	-> 324
          //   #443	-> 357
          //   #442	-> 363
          //   #447	-> 369
          //   #448	-> 372
          //   #450	-> 375
          //   #451	-> 378
          //   #452	-> 380
          // Local variable table:
          //   start	length	slot	name	descriptor
          //   128	13	12	item	Lcam72cam/immersiverailroading/library/ItemComponentType;
          //   317	46	17	z	I
          //   307	62	16	x	I
          //   296	73	15	idx	I
          //   213	156	14	rc	Lcam72cam/immersiverailroading/model/components/ModelComponent;
          //   182	190	12	rcl	Ljava/util/List;
          //   14	364	4	raw	[F
          //   35	343	5	tc	Lcam72cam/mod/serialization/TagCompound;
          //   48	330	6	xRes	I
          //   61	317	7	zRes	I
          //   76	302	8	componentKeys	Ljava/util/List;
          //   86	292	9	heightMap	[[F
          //   95	283	10	availComponents	Ljava/util/List;
          //   380	10	4	e	Ljava/io/IOException;
          //   0	390	0	this	Lcam72cam/immersiverailroading/registry/EntityRollingStockDefinition;
          //   0	390	1	data	Ljava/util/function/Supplier;
          //   0	390	2	meta	Ljava/util/function/Supplier;
          //   0	390	3	stock	Lcam72cam/immersiverailroading/entity/EntityBuildableRollingStock;
          // Local variable type table:
          //   start	length	slot	name	signature
          //   182	190	12	rcl	Ljava/util/List<Lcam72cam/immersiverailroading/model/components/ModelComponent;>;
          //   76	302	8	componentKeys	Ljava/util/List<Ljava/lang/String;>;
          //   95	283	10	availComponents	Ljava/util/List<Lcam72cam/immersiverailroading/library/ModelComponentType;>;
          // Exception table:
          //   from	to	target	type
          //   0	377	378	java/io/IOException
        };
    } catch (IOException e) {
      throw new RuntimeException(e);
    } 
  }
  
  public float[][] createHeightMap(EntityBuildableRollingStock stock) {
    return this.heightmap.apply(stock);
  }
  
  public RealBB getBounds(EntityMoveableRollingStock stock, Gauge gauge) {
    return (new RealBB(gauge.scale() * this.frontBounds, gauge.scale() * -this.rearBounds, gauge.scale() * this.widthBounds, gauge
        .scale() * this.heightBounds, stock.getRotationYaw())).offset(stock.getPosition());
  }
  
  public String name() {
    String[] sp = this.defID.replaceAll(".json", "").split("/");
    String localStr = String.format("%s:entity.%s.%s", new Object[] { "immersiverailroading", sp[sp.length - 2], sp[sp.length - 1] });
    String transStr = TextUtil.translate(localStr);
    return !localStr.equals(transStr) ? transStr : this.name;
  }
  
  public List<String> getTooltip(Gauge gauge) {
    List<String> tips = new ArrayList<>();
    tips.add(GuiText.WEIGHT_TOOLTIP.toString(new Object[] { Integer.valueOf(getWeight(gauge)) }));
    tips.add(GuiText.MODELER_TOOLTIP.toString(new Object[] { this.modelerName }));
    tips.add(GuiText.PACK_TOOLTIP.toString(new Object[] { this.packName }));
    return tips;
  }
  
  protected StockModel<?> createModel() throws Exception {
    return new StockModel(this);
  }
  
  public StockModel<?> getModel() {
    return this.model;
  }
  
  public int getWeight(Gauge gauge) {
    return (int)Math.ceil(gauge.scale() * this.weight);
  }
  
  public double getHeight(Gauge gauge) {
    return gauge.scale() * this.heightBounds;
  }
  
  public double getWidth(Gauge gauge) {
    return gauge.scale() * this.widthBounds;
  }
  
  public double getLength(Gauge gauge) {
    return gauge.scale() * this.frontBounds + this.rearBounds;
  }
  
  public int getMaxPassengers() {
    return this.maxPassengers;
  }
  
  public boolean acceptsPassengers() {
    return false;
  }
  
  public boolean acceptsLivestock() {
    return false;
  }
  
  static class TagMapper implements cam72cam.mod.serialization.TagMapper<EntityRollingStockDefinition> {
    public cam72cam.mod.serialization.TagMapper.TagAccessor<EntityRollingStockDefinition> apply(Class<EntityRollingStockDefinition> type, String fieldName, TagField tag) {
      return new cam72cam.mod.serialization.TagMapper.TagAccessor((d, o) -> d.setString(fieldName, (o == null) ? null : o.defID), d -> DefinitionManager.getDefinition(d.getString(fieldName)));
    }
  }
  
  public ValveGearType getValveGear() {
    return this.valveGear;
  }
}
package cam72cam.immersiverailroading.registry;

import cam72cam.immersiverailroading.Config;
import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.immersiverailroading.library.Gauge;
import cam72cam.immersiverailroading.model.TrackModel;
import cam72cam.mod.gui.Progress;
import cam72cam.mod.resource.Identifier;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinWorkerThread;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.apache.commons.lang3.tuple.Pair;

public class DefinitionManager {
  private static final long STOCK_LOAD_MEMORY_PER_PROCESSOR = 1704984576L;
  
  private static Map<String, EntityRollingStockDefinition> definitions;
  
  private static Map<String, TrackDefinition> tracks;
  
  private static Map<String, JsonLoader> jsonLoaders = new LinkedHashMap<>();
  
  static {
    jsonLoaders.put("locomotives", (defID, data) -> {
          String era = data.get("era").getAsString();
          switch (era) {
            case "steam":
              return new LocomotiveSteamDefinition(defID, data);
            case "diesel":
              return new LocomotiveDieselDefinition(defID, data);
          } 
          ImmersiveRailroading.warn("Invalid era %s in %s", new Object[] { era, defID });
          return null;
        });
    jsonLoaders.put("tender", TenderDefinition::new);
    jsonLoaders.put("passenger", CarPassengerDefinition::new);
    jsonLoaders.put("freight", CarFreightDefinition::new);
    jsonLoaders.put("tank", CarTankDefinition::new);
    jsonLoaders.put("hand_car", HandCarDefinition::new);
  }
  
  private static void initGauges() throws IOException {
    for (Gauge value : new ArrayList(Gauge.values()))
      Gauge.remove(value.value()); 
    Identifier gauges_json = new Identifier("immersiverailroading", "rolling_stock/gauges.json");
    List<Double> toRemove = new ArrayList<>();
    List<InputStream> inputs = gauges_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject gauges = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      if (gauges.has("register"))
        for (Map.Entry<String, JsonElement> gauge : (Iterable<Map.Entry<String, JsonElement>>)gauges.get("register").getAsJsonObject().entrySet())
          Gauge.register(((JsonElement)gauge.getValue()).getAsDouble(), gauge.getKey());  
      if (gauges.has("remove"))
        for (JsonElement gauge : gauges.get("remove").getAsJsonArray())
          toRemove.add(Double.valueOf(gauge.getAsDouble()));  
    } 
    for (Iterator<Double> iterator = toRemove.iterator(); iterator.hasNext(); ) {
      double gauge = ((Double)iterator.next()).doubleValue();
      Gauge.remove(gauge);
    } 
  }
  
  public static void initDefinitions() {
    try {
      initGauges();
    } catch (Exception e) {
      throw new RuntimeException("Unable to load gauges, do you have a broken pack?", e);
    } 
    Runtime runtime = Runtime.getRuntime();
    int processors = runtime.availableProcessors() - 1;
    runtime.gc();
    long maxMemory = runtime.maxMemory();
    long totalMemory = runtime.totalMemory();
    if (maxMemory == Long.MAX_VALUE)
      maxMemory = totalMemory; 
    int loadingThreads = Math.max(1, Math.min(processors, (int)(maxMemory / 1704984576L)));
    ForkJoinPool stockLoadingPool = new ForkJoinPool(loadingThreads, pool -> {
          ForkJoinWorkerThread worker = ForkJoinPool.defaultForkJoinWorkerThreadFactory.newThread(pool);
          worker.setName("ImmersiveRailroading-" + worker.getPoolIndex());
          return worker;
        }null, false);
    try {
      stockLoadingPool.submit(() -> {
            try {
              initModels();
            } catch (IOException e) {
              throw new RuntimeException("Unable to load rolling stock, do you have a broken pack?", e);
            } 
          }).get();
    } catch (InterruptedException|java.util.concurrent.ExecutionException e) {
      throw new RuntimeException(e);
    } finally {
      stockLoadingPool.shutdown();
    } 
    try {
      initTracks();
    } catch (Exception e) {
      throw new RuntimeException("Unable to load tracks, do you have a broken pack?", e);
    } 
  }
  
  private static void initModels() throws IOException {
    ImmersiveRailroading.info("Loading stock models.", new Object[0]);
    Set<String> defTypes = jsonLoaders.keySet();
    List<String> blacklist = getModelBlacklist(defTypes);
    LinkedHashMap<String, String> definitionIDMap = new LinkedHashMap<>();
    Identifier stock_json = new Identifier("immersiverailroading", "rolling_stock/stock.json");
    List<InputStream> inputs = stock_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject stock = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      for (String defType : defTypes) {
        if (stock.has(defType))
          for (JsonElement defName : stock.get(defType).getAsJsonArray()) {
            if (blacklist.contains(defName.getAsString())) {
              ImmersiveRailroading.info("Skipping blacklisted %s", new Object[] { defName.getAsString() });
              continue;
            } 
            String defID = String.format("rolling_stock/%s/%s.json", new Object[] { defType, defName.getAsString() });
            if (definitionIDMap.containsKey(defID))
              continue; 
            definitionIDMap.put(defID, defType);
          }  
      } 
    } 
    Progress.Bar bar = Progress.push("Loading Models", definitionIDMap.size());
    Map<String, EntityRollingStockDefinition> loaded = (Map<String, EntityRollingStockDefinition>)getStockLoadingStream(definitionIDMap.entrySet()).map(tuple -> {
          String defID = (String)tuple.getKey();
          String defType = (String)tuple.getValue();
          ImmersiveRailroading.debug("Loading stock " + defID, new Object[0]);
          Identifier resource = new Identifier("immersiverailroading", defID);
          try (InputStream input = resource.getResourceStream()) {
            JsonParser parser = new JsonParser();
            JsonObject jsonData = parser.parse(new InputStreamReader(input)).getAsJsonObject();
            input.close();
            EntityRollingStockDefinition stockDefinition = ((JsonLoader)jsonLoaders.get(defType)).apply(defID, jsonData);
            return Pair.of(stockDefinition.defID, stockDefinition);
          } catch (Exception e) {
            ImmersiveRailroading.error("Error loading model %s of type %s", new Object[] { defID, defType });
            ImmersiveRailroading.catching(e);
            return null;
          } finally {
            synchronized (bar) {
              bar.step(defID);
            } 
          } 
        }).filter(Objects::nonNull).collect(Collectors.toMap(Pair::getKey, Pair::getValue));
    definitions = new LinkedHashMap<>();
    definitionIDMap.keySet().stream().filter(loaded::containsKey).forEach(x -> (EntityRollingStockDefinition)definitions.put(x, (EntityRollingStockDefinition)loaded.get(x)));
    Progress.pop(bar);
  }
  
  private static List<String> getModelBlacklist(Set<String> defTypes) throws IOException {
    List<String> blacklist = new ArrayList<>();
    Identifier blacklist_json = new Identifier("immersiverailroading", "rolling_stock/blacklist.json");
    List<InputStream> inputs = blacklist_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject stock = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      for (String defType : defTypes) {
        if (stock.has(defType))
          for (JsonElement defName : stock.get(defType).getAsJsonArray())
            blacklist.add(defName.getAsString());  
      } 
    } 
    return blacklist;
  }
  
  private static void initTracks() throws IOException {
    tracks = new LinkedHashMap<>();
    ImmersiveRailroading.info("Loading tracks.", new Object[0]);
    Identifier track_json = new Identifier("immersiverailroading", "track/track.json");
    List<InputStream> inputs = track_json.getResourceStreamAll();
    for (InputStream input : inputs) {
      JsonParser parser = new JsonParser();
      JsonObject track = parser.parse(new InputStreamReader(input)).getAsJsonObject();
      input.close();
      JsonArray types = track.getAsJsonArray("types");
      Progress.Bar bar = Progress.push("Loading Tracks", types.size());
      for (JsonElement def : types) {
        bar.step(def.getAsString());
        String trackID = String.format("immersiverailroading:track/%s.json", new Object[] { def.getAsString() });
        ImmersiveRailroading.debug("Loading Track %s", new Object[] { trackID });
        JsonParser trackParser = new JsonParser();
        JsonObject trackData = trackParser.parse(new InputStreamReader((new Identifier(trackID)).getResourceStream())).getAsJsonObject();
        try {
          tracks.put(trackID, new TrackDefinition(trackID, trackData));
        } catch (Exception e) {
          ImmersiveRailroading.catching(e);
        } 
      } 
      Progress.pop(bar);
    } 
  }
  
  private static <E> Stream<E> getStockLoadingStream(Collection<E> collection) {
    if (!Config.ConfigPerformance.multithreadedStockLoading)
      return collection.stream(); 
    return collection.parallelStream();
  }
  
  public static EntityRollingStockDefinition getDefinition(String defID) {
    return definitions.get(defID);
  }
  
  public static Collection<EntityRollingStockDefinition> getDefinitions() {
    return definitions.values();
  }
  
  public static Set<String> getDefinitionNames() {
    return definitions.keySet();
  }
  
  public static List<TrackDefinition> getTracks() {
    return new ArrayList<>(tracks.values());
  }
  
  public static List<String> getTrackIDs() {
    return new ArrayList<>(tracks.keySet());
  }
  
  public static TrackModel getTrack(String track, double value) {
    return getTrack(track).getTrackForGauge(value);
  }
  
  public static TrackDefinition getTrack(String track) {
    TrackDefinition def = tracks.get(track);
    if (def == null)
      def = tracks.values().stream().findFirst().get(); 
    return def;
  }
  
  @FunctionalInterface
  private static interface JsonLoader {
    EntityRollingStockDefinition apply(String param1String, JsonObject param1JsonObject) throws Exception;
  }
}
package cam72cam.immersiverailroading.render;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ExpireableList<K, V> {
  public int lifespan() {
    return 10;
  }
  
  public boolean sliding() {
    return true;
  }
  
  public void onRemove(K key, V value) {}
  
  private static long timeS() {
    return System.currentTimeMillis() / 1000L;
  }
  
  private Map<K, V> map = new HashMap<>();
  
  private Map<K, Long> mapUsage = new HashMap<>();
  
  private long lastTime = timeS();
  
  public V get(K key) {
    synchronized (this) {
      if (this.lastTime + lifespan() < timeS()) {
        Set<K> ks = new HashSet<>();
        ks.addAll(this.map.keySet());
        for (K dk : ks) {
          if (dk != key && ((Long)this.mapUsage.get(dk)).longValue() + lifespan() < timeS()) {
            onRemove(dk, this.map.get(dk));
            this.map.remove(dk);
            this.mapUsage.remove(dk);
          } 
        } 
        this.lastTime = timeS();
      } 
      if (this.map.containsKey(key)) {
        if (sliding())
          this.mapUsage.put(key, Long.valueOf(timeS())); 
        return this.map.get(key);
      } 
      return null;
    } 
  }
  
  public void put(K key, V displayList) {
    synchronized (this) {
      if (displayList == null) {
        this.map.remove(key);
      } else {
        this.mapUsage.put(key, Long.valueOf(timeS()));
        this.map.put(key, displayList);
      } 
    } 
  }
  
  public Collection<V> values() {
    synchronized (this) {
      if (this.lastTime + lifespan() < timeS()) {
        Set<K> ks = new HashSet<>();
        ks.addAll(this.map.keySet());
        for (K dk : ks) {
          if (((Long)this.mapUsage.get(dk)).longValue() + lifespan() < timeS()) {
            onRemove(dk, this.map.get(dk));
            this.map.remove(dk);
            this.mapUsage.remove(dk);
          } 
        } 
        this.lastTime = timeS();
      } 
      return this.map.values();
    } 
  }
}
package cam72cam.immersiverailroading.render;

import cam72cam.mod.math.Vec3d;
import cam72cam.mod.render.GLSLShader;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.render.Particle;
import cam72cam.mod.resource.Identifier;
import cam72cam.mod.world.World;
import java.util.List;
import org.lwjgl.opengl.GL11;

public class SmokeParticle extends Particle {
  private static GLSLShader shader;
  
  private static int dl;
  
  private final double rot;
  
  private final SmokeParticleData data;
  
  public static class SmokeParticleData extends Particle.ParticleData {
    private final float darken;
    
    private final float thickness;
    
    private final double diameter;
    
    public SmokeParticleData(World world, Vec3d pos, Vec3d motion, int lifespan, float darken, float thickness, double diameter) {
      super(world, pos, motion, lifespan);
      this.darken = darken;
      this.thickness = thickness;
      this.diameter = diameter;
    }
  }
  
  public SmokeParticle(SmokeParticleData data) {
    this.data = data;
    this.rot = Math.random() * 360.0D;
  }
  
  public boolean depthTestEnabled() {
    return false;
  }
  
  public void render(float partialTicks) {}
  
  public static void renderAll(List<SmokeParticle> particles, float partialTicks) {
    if (shader == null) {
      shader = new GLSLShader(new Identifier("immersiverailroading", "particles/smoke_vert.c"), new Identifier("immersiverailroading", "particles/smoke_frag.c"));
      dl = GL11.glGenLists(1);
      GL11.glNewList(dl, 4864);
      GL11.glBegin(7);
      GL11.glTexCoord2d(0.0D, 0.0D);
      GL11.glVertex3d(-1.0D, -1.0D, 0.0D);
      GL11.glTexCoord2d(0.0D, 1.0D);
      GL11.glVertex3d(-1.0D, 1.0D, 0.0D);
      GL11.glTexCoord2d(1.0D, 1.0D);
      GL11.glVertex3d(1.0D, 1.0D, 0.0D);
      GL11.glTexCoord2d(1.0D, 0.0D);
      GL11.glVertex3d(1.0D, -1.0D, 0.0D);
      GL11.glEnd();
      GL11.glEndList();
    } 
    try(OpenGL.With sb = shader.bind(); 
        OpenGL.With light = OpenGL.bool(2896, false); 
        OpenGL.With cull = OpenGL.bool(2884, false); 
        OpenGL.With tex = OpenGL.bool(3553, false); 
        OpenGL.With blend = OpenGL.blend(770, 771)) {
      for (SmokeParticle particle : particles) {
        double life = ((float)particle.ticks / particle.data.lifespan);
        double expansionRate = 16.0D;
        double radius = particle.data.diameter * (Math.sqrt(life) * expansionRate + 1.0D) * 0.5D;
        float alpha = (particle.data.thickness + 0.2F) * (1.0F - (float)Math.sqrt(life));
        try (OpenGL.With matrix = OpenGL.matrix()) {
          float darken = 0.9F - particle.data.darken * 0.9F;
          shader.paramFloat("ALPHA", new float[] { alpha });
          shader.paramFloat("DARKEN", new float[] { darken, darken, darken });
          GL11.glTranslated(particle.renderX, particle.renderY, particle.renderZ);
          particle.lookAtPlayer();
          GL11.glScaled(radius, radius, radius);
          GL11.glRotated(particle.rot, 0.0D, 0.0D, 1.0D);
          GL11.glTranslated(0.5D, 0.0D, 0.0D);
          GL11.glRotated(-particle.rot, 0.0D, 0.0D, 1.0D);
          double angle = ((float)particle.ticks + partialTicks);
          GL11.glRotated(angle, 0.0D, 0.0D, 1.0D);
          GL11.glCallList(dl);
        } 
      } 
    } 
  }
}
package cam72cam.immersiverailroading.render;

import cam72cam.immersiverailroading.ConfigGraphics;
import cam72cam.immersiverailroading.library.ModelComponentType;
import cam72cam.immersiverailroading.model.TrackModel;
import cam72cam.immersiverailroading.registry.DefinitionManager;
import cam72cam.immersiverailroading.registry.EntityRollingStockDefinition;
import cam72cam.mod.model.obj.OBJModel;
import cam72cam.mod.render.VBO;
import cam72cam.mod.render.obj.OBJRender;
import cam72cam.mod.render.obj.OBJVBO;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class StockRenderCache {
  private static Map<String, OBJRender> render_cache = new HashMap<>();
  
  private static Map<String, VBO> vbo_cache = new HashMap<>();
  
  private static Map<TrackModel, OBJRender> track_cache = new HashMap<>();
  
  public static void clearRenderCache() {
    for (OBJRender model : render_cache.values())
      model.free(); 
    for (OBJRender model : track_cache.values())
      model.free(); 
    render_cache = new HashMap<>();
    track_cache = new HashMap<>();
    vbo_cache = new HashMap<>();
  }
  
  public static OBJRender getRender(String defID) {
    if (!render_cache.containsKey(defID)) {
      EntityRollingStockDefinition def = DefinitionManager.getDefinition(defID);
      if (def != null)
        render_cache.put(defID, new OBJRender((OBJModel)def.getModel(), ConfigGraphics.textureCacheSeconds)); 
    } 
    return render_cache.get(defID);
  }
  
  public static VBO getVBO(String defID) {
    if (!vbo_cache.containsKey(defID)) {
      OBJRender renderer = getRender(defID);
      if (renderer == null)
        return null; 
      OBJVBO.Builder builder = renderer.getVBO().subModel();
      builder.draw((Collection)renderer.model.groups.keySet().stream().filter(x -> !ModelComponentType.isParticle(x)).collect(Collectors.toList()));
      vbo_cache.put(defID, builder.build());
    } 
    return vbo_cache.get(defID);
  }
  
  public static OBJRender getTrackRenderer(TrackModel model) {
    if (!track_cache.containsKey(model))
      track_cache.put(model, new OBJRender((OBJModel)model)); 
    return track_cache.get(model);
  }
}
package cam72cam.immersiverailroading.thirdparty;

import cam72cam.immersiverailroading.entity.EntityCoupleableRollingStock;
import cam72cam.immersiverailroading.entity.EntityMoveableRollingStock;
import cam72cam.immersiverailroading.entity.EntityRollingStock;
import cam72cam.immersiverailroading.entity.Freight;
import cam72cam.immersiverailroading.entity.FreightTank;
import cam72cam.immersiverailroading.entity.Locomotive;
import cam72cam.immersiverailroading.entity.LocomotiveDiesel;
import cam72cam.immersiverailroading.entity.LocomotiveSteam;
import cam72cam.immersiverailroading.physics.PhysicsAccummulator;
import cam72cam.immersiverailroading.registry.EntityRollingStockDefinition;
import cam72cam.immersiverailroading.registry.LocomotiveDefinition;
import cam72cam.immersiverailroading.thirdparty.event.TagEvent;
import cam72cam.immersiverailroading.tile.TileRailBase;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.world.World;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.math.BlockPos;
import net.minecraft.util.math.Vec3d;
import net.minecraft.world.World;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.fluids.FluidStack;
import net.minecraftforge.fml.common.eventhandler.Event;

public class CommonAPI {
  private final EntityRollingStock stock;
  
  public static CommonAPI create(World world, BlockPos pos) {
    return create(world, pos, EntityRollingStock.class);
  }
  
  public static CommonAPI create(World world, BlockPos pos, Class<? extends EntityRollingStock> stockClass) {
    TileRailBase te = (TileRailBase)World.get(world).getBlockEntity(new Vec3i(pos), TileRailBase.class);
    if (te != null) {
      EntityRollingStock stock = te.getStockNearBy(stockClass);
      if (stock != null)
        return new CommonAPI(stock); 
    } 
    return null;
  }
  
  public CommonAPI(EntityRollingStock stock) {
    this.stock = stock;
  }
  
  public FluidStack getFluid() {
    return null;
  }
  
  public Map<String, Object> info() {
    if (this.stock != null) {
      Map<String, Object> info = new HashMap<>();
      EntityRollingStockDefinition def = this.stock.getDefinition();
      info.put("id", def.defID);
      info.put("name", def.name());
      info.put("tag", this.stock.tag);
      info.put("weight", Double.valueOf(this.stock.getWeight()));
      EnumFacing dir = EnumFacing.func_176733_a(this.stock.getRotationYaw());
      if (this.stock instanceof EntityMoveableRollingStock) {
        EntityMoveableRollingStock movable = (EntityMoveableRollingStock)this.stock;
        info.put("speed", Double.valueOf(movable.getCurrentSpeed().metric()));
        if (movable.getCurrentSpeed().metric() < 0.0D)
          dir = dir.func_176734_d(); 
      } 
      info.put("direction", dir.toString());
      if (this.stock instanceof cam72cam.immersiverailroading.entity.EntityRidableRollingStock)
        info.put("passengers", Integer.valueOf(this.stock.getPassengerCount())); 
      if (this.stock instanceof Locomotive) {
        Locomotive loco = (Locomotive)this.stock;
        LocomotiveDefinition locoDef = loco.getDefinition();
        info.put("horsepower", Integer.valueOf(locoDef.getHorsePower(loco.gauge)));
        info.put("traction", Integer.valueOf(locoDef.getStartingTractionNewtons(loco.gauge)));
        info.put("max_speed", Double.valueOf(locoDef.getMaxSpeed(loco.gauge).metric()));
        info.put("brake", Float.valueOf(loco.getAirBrake()));
        info.put("throttle", Float.valueOf(loco.getThrottle()));
        if (loco instanceof LocomotiveSteam) {
          LocomotiveSteam steam = (LocomotiveSteam)loco;
          info.put("pressure", Float.valueOf(steam.getBoilerPressure()));
          info.put("temperature", Float.valueOf(steam.getBoilerTemperature()));
        } 
        if (loco instanceof LocomotiveDiesel)
          info.put("temperature", Float.valueOf(((LocomotiveDiesel)loco).getEngineTemperature())); 
      } 
      FluidStack fluid = getFluid();
      if (fluid != null) {
        info.put("fluid_type", fluid.getFluid().getName());
        info.put("fluid_amount", Integer.valueOf(fluid.amount));
      } else {
        info.put("fluid_type", null);
        info.put("fluid_amount", Integer.valueOf(0));
      } 
      if (this.stock instanceof FreightTank)
        info.put("fluid_max", Integer.valueOf(((FreightTank)this.stock).getTankCapacity().MilliBuckets())); 
      if (this.stock instanceof Freight) {
        Freight freight = (Freight)this.stock;
        info.put("cargo_percent", Integer.valueOf(freight.getPercentCargoFull()));
        info.put("cargo_size", Integer.valueOf(freight.getInventorySize()));
      } 
      return info;
    } 
    return null;
  }
  
  public Map<String, Object> consist(boolean supportsList) {
    if (!(this.stock instanceof EntityCoupleableRollingStock))
      return null; 
    EntityCoupleableRollingStock stock = (EntityCoupleableRollingStock)this.stock;
    int traction = 0;
    PhysicsAccummulator acc = new PhysicsAccummulator(stock.getCurrentTickPosAndPrune());
    stock.mapTrain(stock, true, true, acc::accumulate);
    Map<String, Object> info = new HashMap<>();
    List<Object> locos = new ArrayList();
    info.put("cars", Integer.valueOf(acc.count));
    info.put("tractive_effort_N", Double.valueOf(acc.tractiveEffortNewtons));
    info.put("weight_kg", Double.valueOf(acc.massToMoveKg));
    info.put("speed_km", Double.valueOf(stock.getCurrentSpeed().metric()));
    EnumFacing dir = EnumFacing.func_176733_a(stock.getRotationYaw());
    if (stock.getCurrentSpeed().metric() < 0.0D)
      dir = dir.func_176734_d(); 
    info.put("direction", dir.toString());
    for (EntityCoupleableRollingStock car : stock.getTrain()) {
      if (car instanceof Locomotive) {
        LocomotiveDefinition locoDef = ((Locomotive)car).getDefinition();
        traction += locoDef.getStartingTractionNewtons(car.gauge);
        locos.add((new CommonAPI((EntityRollingStock)car)).info());
      } 
    } 
    if (supportsList) {
      info.put("locomotives", locos);
    } else {
      Map<String, Object> locomotives = new HashMap<>();
      for (int i = 0; i < locos.size(); i++)
        locomotives.put("" + i, locos.get(i)); 
      info.put("locomotives", locomotives);
    } 
    info.put("total_traction_N", Integer.valueOf(traction));
    return info;
  }
  
  public String getTag() {
    TagEvent.GetTagEvent tagEvent = new TagEvent.GetTagEvent(this.stock.getUUID());
    MinecraftForge.EVENT_BUS.post((Event)tagEvent);
    if (tagEvent.tag != null)
      return tagEvent.tag; 
    return this.stock.tag;
  }
  
  public void setTag(String tag) {
    TagEvent.SetTagEvent tagEvent = new TagEvent.SetTagEvent(this.stock.getUUID(), tag);
    MinecraftForge.EVENT_BUS.post((Event)tagEvent);
    this.stock.tag = tag;
  }
  
  private float normalize(double val) {
    if (Double.isNaN(val))
      return 0.0F; 
    if (val > 1.0D)
      return 1.0F; 
    if (val < -1.0D)
      return -1.0F; 
    return (float)val;
  }
  
  public void setThrottle(double throttle) {
    if (this.stock instanceof Locomotive)
      ((Locomotive)this.stock).setThrottle(normalize(throttle)); 
  }
  
  public void setAirBrake(double brake) {
    if (this.stock instanceof Locomotive)
      ((Locomotive)this.stock).setAirBrake(normalize(brake)); 
  }
  
  public void setHorn(int horn) {
    if (this.stock instanceof Locomotive)
      ((Locomotive)this.stock).setHorn(horn, null); 
  }
  
  public void setBell(int bell) {
    if (this.stock instanceof Locomotive)
      ((Locomotive)this.stock).setBell(bell); 
  }
  
  public Vec3d getPosition() {
    return this.stock.getPosition().internal();
  }
  
  public UUID getUniqueID() {
    return this.stock.getUUID();
  }
}
package cam72cam.immersiverailroading.thirdparty;

import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.mod.ModEvent;
import cam72cam.mod.event.CommonEvents;
import java.lang.reflect.Method;
import net.minecraftforge.fml.common.FMLCommonHandler;
import net.minecraftforge.fml.common.Loader;

public class CompatLoader {
  private static Object invokeStatic(String modID, String cname, String method, Object... objects) {
    if (Loader.isModLoaded(modID))
      try {
        Class<?> cls = Class.forName(cname);
        return cls.getMethod(method, new Class[0]).invoke(null, objects);
      } catch (Exception ex) {
        ImmersiveRailroading.catching(ex);
      }  
    return null;
  }
  
  public static boolean openWiki() {
    if (Loader.isModLoaded("igwmod"))
      try {
        Class<?> cls = Class.forName("igwmod.gui.GuiWiki");
        Object wiki = cls.newInstance();
        FMLCommonHandler.instance().showGuiScreen(wiki);
        Method scf = cls.getMethod("setCurrentFile", new Class[] { String.class, Object[].class });
        scf.invoke(wiki, new Object[] { "immersiverailroading:home", new Object[0] });
        return true;
      } catch (InstantiationException|IllegalAccessException|ClassNotFoundException|NoSuchMethodException|SecurityException|IllegalArgumentException|java.lang.reflect.InvocationTargetException e) {
        e.printStackTrace();
      }  
    return false;
  }
  
  public static void common(ModEvent event) {
    switch (event) {
      case CONSTRUCT:
        CommonEvents.Block.REGISTER.subscribe(Legacy::registerBlocks);
        break;
      case INITIALIZE:
        invokeStatic("igwmod", "cam72cam.immersiverailroading.thirdparty.IGWMod", "init", new Object[0]);
        break;
      case SETUP:
        invokeStatic("immersiveengineering", "cam72cam.immersiverailroading.thirdparty.ImmersiveEngineering", "init", new Object[0]);
        invokeStatic("computercraft", "cam72cam.immersiverailroading.thirdparty.ComputerCraft", "init", new Object[0]);
        invokeStatic("opencomputers", "cam72cam.immersiverailroading.thirdparty.opencomputers.Compat", "init", new Object[0]);
        break;
    } 
  }
}
package cam72cam.immersiverailroading.thirdparty;

import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.immersiverailroading.library.Augment;
import cam72cam.immersiverailroading.tile.TileRailBase;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.world.World;
import dan200.computercraft.api.ComputerCraftAPI;
import dan200.computercraft.api.lua.ILuaContext;
import dan200.computercraft.api.lua.LuaException;
import dan200.computercraft.api.peripheral.IComputerAccess;
import dan200.computercraft.api.peripheral.IPeripheral;
import dan200.computercraft.api.peripheral.IPeripheralProvider;
import java.util.LinkedHashMap;
import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;

public class ComputerCraft {
  public static void init() {
    ComputerCraftAPI.registerPeripheralProvider(new IPeripheralProvider() {
          @Nullable
          public IPeripheral getPeripheral(@Nonnull World world, @Nonnull BlockPos blockPos, @Nonnull EnumFacing enumFacing) {
            TileRailBase rail = (TileRailBase)World.get(world).getBlockEntity(new Vec3i(blockPos), TileRailBase.class);
            if (rail != null) {
              if (rail.getAugment() == Augment.DETECTOR)
                return new ComputerCraft.DetectorPeripheral(world, blockPos); 
              if (rail.getAugment() == Augment.LOCO_CONTROL)
                return new ComputerCraft.LocoControlPeripheral(world, blockPos); 
            } 
            return null;
          }
        });
  }
  
  @FunctionalInterface
  private static interface APICall {
    Object[] apply(CommonAPI param1CommonAPI, Object[] param1ArrayOfObject) throws LuaException;
  }
  
  private static abstract class BasePeripheral implements IPeripheral {
    private final World world;
    
    private final BlockPos pos;
    
    private final String[] fnNames;
    
    private final ComputerCraft.APICall[] fnImpls;
    
    public BasePeripheral(World world, BlockPos blockPos, LinkedHashMap<String, ComputerCraft.APICall> methods) {
      this.world = world;
      this.pos = blockPos;
      this.fnNames = (String[])methods.keySet().toArray((Object[])new String[0]);
      this.fnImpls = (ComputerCraft.APICall[])methods.values().toArray((Object[])new ComputerCraft.APICall[0]);
    }
    
    @Nonnull
    public String[] getMethodNames() {
      return this.fnNames;
    }
    
    @Nullable
    public Object[] callMethod(@Nonnull IComputerAccess iComputerAccess, @Nonnull ILuaContext iLuaContext, int i, @Nonnull Object[] objects) throws LuaException, InterruptedException {
      try {
        CommonAPI api = CommonAPI.create(this.world, this.pos);
        if (api != null && i < this.fnImpls.length)
          return this.fnImpls[i].apply(api, objects); 
      } catch (Exception ex) {
        ImmersiveRailroading.catching(ex);
      } 
      return null;
    }
    
    public boolean equals(@Nullable IPeripheral iPeripheral) {
      return (iPeripheral == this);
    }
  }
  
  private static Object getObjParam(Object[] params, int id, String name) throws LuaException {
    if (params.length > id)
      return params[id]; 
    throw new LuaException("Required parameter \"" + name + "\"");
  }
  
  private static double getDoubleParam(Object[] params, int id, String name) throws LuaException {
    Object obj = getObjParam(params, id, name);
    try {
      return Double.parseDouble(obj.toString());
    } catch (NumberFormatException ex) {
      throw new LuaException("Required parameter \"" + name + "\" is not a number");
    } 
  }
  
  private static class DetectorPeripheral extends BasePeripheral {
    private static LinkedHashMap<String, ComputerCraft.APICall> methods = new LinkedHashMap<>();
    
    static {
      methods.put("info", (api, params) -> new Object[] { api.info() });
      methods.put("consist", (api, params) -> new Object[] { api.consist(false) });
      methods.put("getTag", (api, params) -> new Object[] { api.getTag() });
      methods.put("setTag", (api, params) -> {
            api.setTag(ComputerCraft.getObjParam(params, 0, "tag").toString());
            return null;
          });
    }
    
    public DetectorPeripheral(World world, BlockPos blockPos) {
      super(world, blockPos, methods);
    }
    
    @Nonnull
    public String getType() {
      return "ir_augment_detector";
    }
  }
  
  private static class LocoControlPeripheral extends BasePeripheral {
    private static LinkedHashMap<String, ComputerCraft.APICall> methods = new LinkedHashMap<>();
    
    static {
      methods.putAll(ComputerCraft.DetectorPeripheral.methods);
      methods.put("setThrottle", (api, params) -> {
            api.setThrottle(ComputerCraft.getDoubleParam(params, 0, "throttle"));
            return null;
          });
      methods.put("setBrake", (api, params) -> {
            api.setAirBrake(ComputerCraft.getDoubleParam(params, 0, "brake"));
            return null;
          });
      methods.put("setHorn", (api, params) -> {
            api.setHorn((int)ComputerCraft.getDoubleParam(params, 0, "horn"));
            return null;
          });
      methods.put("setBell", (api, params) -> {
            api.setBell((int)ComputerCraft.getDoubleParam(params, 0, "bell"));
            return null;
          });
    }
    
    public LocoControlPeripheral(World world, BlockPos blockPos) {
      super(world, blockPos, methods);
    }
    
    @Nonnull
    public String getType() {
      return "ir_augment_control";
    }
  }
}
package cam72cam.immersiverailroading.thirdparty;

import cam72cam.immersiverailroading.IRItems;
import igwmod.api.WikiRegistry;
import igwmod.gui.GuiWiki;
import igwmod.gui.tabs.BaseWikiTab;
import igwmod.gui.tabs.IWikiTab;
import net.minecraft.item.ItemStack;
import net.minecraft.util.NonNullList;
import net.minecraftforge.fml.common.event.FMLInterModComms;

public class IGWMod {
  public static void init() {
    FMLInterModComms.sendMessage("igwmod", "cam72cam.immersiverailroading.thirdparty.IGWMod", "setup");
  }
  
  public static void setup() {
    WikiRegistry.registerWikiTab((IWikiTab)new BaseWikiTab() {
          public String getName() {
            return "immersiverailroading";
          }
          
          public ItemStack renderTabIcon(GuiWiki gui) {
            NonNullList<ItemStack> items = NonNullList.func_191196_a();
            items.add(new ItemStack(IRItems.ITEM_TRACK_BLUEPRINT.internal));
            return (ItemStack)items.get(0);
          }
          
          protected String getPageName(String pageEntry) {
            if (pageEntry.toCharArray()[0] == '#')
              pageEntry = pageEntry.replace("#", ""); 
            String newstr = "";
            boolean cap = true;
            for (char c : pageEntry.toCharArray()) {
              if (c == '-') {
                cap = true;
                newstr = newstr + " ";
              } else {
                if (cap) {
                  c = Character.toUpperCase(c);
                  cap = false;
                } 
                newstr = newstr + c;
              } 
            } 
            return newstr;
          }
          
          protected String getPageLocation(String pageEntry) {
            return "immersiverailroading:" + pageEntry;
          }
        });
  }
}
package cam72cam.immersiverailroading.thirdparty;

import blusunrize.immersiveengineering.common.IEContent;
import blusunrize.immersiveengineering.common.blocks.metal.BlockTypes_MetalDecoration0;
import blusunrize.immersiveengineering.common.blocks.metal.BlockTypes_MetalDecoration1;
import blusunrize.immersiveengineering.common.blocks.stone.BlockTypes_StoneDecoration;
import cam72cam.immersiverailroading.util.IRFuzzy;
import cam72cam.mod.item.Fuzzy;
import cam72cam.mod.item.ItemStack;
import net.minecraft.block.Block;
import net.minecraft.item.ItemStack;

public class ImmersiveEngineering {
  public static void init() {
    ItemStack casing = new ItemStack(new ItemStack((Block)IEContent.blockStoneDecoration, 1, BlockTypes_StoneDecoration.BLASTBRICK.getMeta()));
    ItemStack light_eng = new ItemStack(new ItemStack((Block)IEContent.blockMetalDecoration0, 1, BlockTypes_MetalDecoration0.LIGHT_ENGINEERING.getMeta()));
    ItemStack heavy_eng = new ItemStack(new ItemStack((Block)IEContent.blockMetalDecoration0, 1, BlockTypes_MetalDecoration0.HEAVY_ENGINEERING.getMeta()));
    ItemStack scaffold = new ItemStack(new ItemStack((Block)IEContent.blockMetalDecoration1, 1, BlockTypes_MetalDecoration1.STEEL_SCAFFOLDING_0.getMeta()));
    IRFuzzy.IR_CASTING_CASING.add(casing);
    IRFuzzy.IR_LIGHT_ENG.add(light_eng);
    IRFuzzy.IR_HEAVY_ENG.add(heavy_eng);
    IRFuzzy.IR_SCAFFOLDING.add(scaffold);
    IRFuzzy.IR_TIE.include(Fuzzy.get("plankTreatedWood"));
  }
}
package cam72cam.immersiverailroading.thirdparty;

import cam72cam.immersiverailroading.IRBlocks;
import cam72cam.immersiverailroading.thirdparty.trackapi.TileEntityTickableTrack;
import cam72cam.mod.block.tile.TileEntity;
import cam72cam.mod.block.tile.TileEntityTickable;
import cam72cam.mod.resource.Identifier;
import net.minecraft.nbt.NBTTagCompound;

public class Legacy {
  public static class LegacyRailGagTile extends TileEntityTickableTrack {
    public void func_145839_a(NBTTagCompound data) {
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL_GAG.id.getPath())).toString());
      super.func_145839_a(data);
    }
    
    public NBTTagCompound func_189515_b(NBTTagCompound data) {
      data = super.func_189515_b(data);
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL_GAG.id.getPath())).toString());
      data.func_74778_a("id", (new Identifier("universalmodcore", "tile_track")).toString());
      return data;
    }
  }
  
  public static class LegacyRailTile extends TileEntityTickableTrack {
    public void func_145839_a(NBTTagCompound data) {
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL.id.getPath())).toString());
      super.func_145839_a(data);
    }
    
    public NBTTagCompound func_189515_b(NBTTagCompound data) {
      data = super.func_189515_b(data);
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL.id.getPath())).toString());
      data.func_74778_a("id", (new Identifier("universalmodcore", "tile_track")).toString());
      return data;
    }
  }
  
  public static class LegacyRailPreview extends TileEntityTickable {
    public void func_145839_a(NBTTagCompound data) {
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL_PREVIEW.id.getPath())).toString());
      super.func_145839_a(data);
    }
    
    public NBTTagCompound func_189515_b(NBTTagCompound data) {
      data = super.func_189515_b(data);
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_RAIL_PREVIEW.id.getPath())).toString());
      data.func_74778_a("id", (new Identifier("universalmodcore", "tile_track")).toString());
      return data;
    }
  }
  
  public static class LegacyMultiblockTile extends TileEntityTickable {
    public void func_145839_a(NBTTagCompound data) {
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_MULTIBLOCK.id.getPath())).toString());
      super.func_145839_a(data);
    }
    
    public NBTTagCompound func_189515_b(NBTTagCompound data) {
      data = super.func_189515_b(data);
      data.func_74778_a("instanceId", (new Identifier("immersiverailroading", IRBlocks.BLOCK_MULTIBLOCK.id.getPath())).toString());
      data.func_74778_a("id", (new Identifier("universalmodcore", "tile_track")).toString());
      return data;
    }
  }
  
  public static void registerBlocks() {
    TileEntity.registerTileEntity(LegacyRailGagTile.class, new Identifier("minecraft", IRBlocks.BLOCK_RAIL_GAG.id.getPath()));
    TileEntity.registerTileEntity(LegacyRailTile.class, new Identifier("minecraft", IRBlocks.BLOCK_RAIL.id.getPath()));
    TileEntity.registerTileEntity(LegacyRailPreview.class, new Identifier("minecraft", IRBlocks.BLOCK_RAIL_PREVIEW.id.getPath()));
    TileEntity.registerTileEntity(LegacyMultiblockTile.class, new Identifier("minecraft", IRBlocks.BLOCK_MULTIBLOCK.id.getPath()));
  }
}
package cam72cam.immersiverailroading.render.tile;

import cam72cam.immersiverailroading.render.ExpireableList;
import cam72cam.immersiverailroading.render.rail.RailRenderUtil;
import cam72cam.immersiverailroading.tile.TileRailPreview;
import cam72cam.immersiverailroading.track.BuilderBase;
import cam72cam.immersiverailroading.track.IIterableTrack;
import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.render.GlobalRender;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.world.World;
import org.apache.commons.lang3.tuple.Pair;
import org.lwjgl.opengl.GL11;

public class MultiPreviewRender {
  private static ExpireableList<Pair<World, Vec3i>, TileRailPreview> previews = new ExpireableList();
  
  static {
    GlobalRender.registerRender(MultiPreviewRender::render);
  }
  
  private static void render(float partialTicks) {
    try (OpenGL.With transparency = OpenGL.transparency(1.0F, 1.0F, 1.0F, 0.7F)) {
      for (TileRailPreview preview : previews.values()) {
        for (BuilderBase builder : ((IIterableTrack)preview.getRailRenderInfo().getBuilder(preview.getWorld(), preview.isAboveRails() ? preview.getPos().down() : preview.getPos())).getSubBuilders()) {
          RailInfo info = builder.info;
          Vec3d placementPosition = info.placementInfo.placementPosition.add(builder.pos);
          if (GlobalRender.getCameraPos(partialTicks).distanceTo(placementPosition) < (GlobalRender.getRenderDistance() + 50)) {
            placementPosition = placementPosition.subtract(GlobalRender.getCameraPos(partialTicks));
            try (OpenGL.With matrix = OpenGL.matrix()) {
              GL11.glTranslated(placementPosition.x, placementPosition.y, placementPosition.z);
              RailRenderUtil.render(info, preview.getWorld(), builder.pos, true);
            } 
          } 
        } 
      } 
    } 
  }
  
  public static void add(TileRailPreview preview) {
    previews.put(Pair.of(preview.getWorld(), preview.getPos()), preview);
  }
  
  public static void remove(World world, Vec3i removed) {
    previews.put(Pair.of(world, removed), null);
  }
}
package cam72cam.immersiverailroading.render.rail;

import cam72cam.immersiverailroading.render.DisplayListCache;
import cam72cam.immersiverailroading.track.TrackBase;
import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.world.World;
import org.lwjgl.opengl.GL11;

public class RailBaseOverlayRender {
  private static DisplayListCache cache = new DisplayListCache() {
      public int lifespan() {
        return 1;
      }
      
      public boolean sliding() {
        return false;
      }
    };
  
  private static void doDraw(RailInfo info, World world, Vec3i pos) {
    Vec3i placePos = (new Vec3i(info.placementInfo.placementPosition)).add(pos);
    for (TrackBase base : info.getBuilder(world, placePos).getTracksForRender()) {
      boolean canPlace = base.canPlaceTrack();
      if (!canPlace)
        try (OpenGL.With matrix = OpenGL.matrix()) {
          Vec3i tpos = base.getPos();
          tpos = tpos.subtract(placePos);
          GL11.glTranslated(tpos.x, tpos.y, (tpos.z + 1));
          GL11.glScaled(1.002D, (base.getBedHeight() + 0.2F), 1.002D);
          GL11.glTranslated(-0.001D, 0.0D, 0.001D);
          GL11.glBegin(7);
          GL11.glVertex3f(0.0F, 0.0F, 0.0F);
          GL11.glVertex3f(1.0F, 0.0F, 0.0F);
          GL11.glVertex3f(1.0F, 1.0F, 0.0F);
          GL11.glVertex3f(0.0F, 1.0F, 0.0F);
          GL11.glVertex3f(0.0F, 1.0F, -1.0F);
          GL11.glVertex3f(1.0F, 1.0F, -1.0F);
          GL11.glVertex3f(1.0F, 0.0F, -1.0F);
          GL11.glVertex3f(0.0F, 0.0F, -1.0F);
          GL11.glVertex3f(1.0F, 0.0F, 0.0F);
          GL11.glVertex3f(1.0F, 0.0F, -1.0F);
          GL11.glVertex3f(1.0F, 1.0F, -1.0F);
          GL11.glVertex3f(1.0F, 1.0F, 0.0F);
          GL11.glVertex3f(0.0F, 1.0F, 0.0F);
          GL11.glVertex3f(0.0F, 1.0F, -1.0F);
          GL11.glVertex3f(0.0F, 0.0F, -1.0F);
          GL11.glVertex3f(0.0F, 0.0F, 0.0F);
          GL11.glVertex3f(0.0F, 1.0F, 0.0F);
          GL11.glVertex3f(1.0F, 1.0F, 0.0F);
          GL11.glVertex3f(1.0F, 1.0F, -1.0F);
          GL11.glVertex3f(0.0F, 1.0F, -1.0F);
          GL11.glVertex3f(0.0F, 0.0F, 0.0F);
          GL11.glVertex3f(1.0F, 0.0F, 0.0F);
          GL11.glVertex3f(1.0F, 0.0F, -1.0F);
          GL11.glVertex3f(0.0F, 0.0F, -1.0F);
          GL11.glEnd();
        }  
    } 
  }
  
  public static void draw(RailInfo info, World world, Vec3i pos) {
    String key = info.uniqueID + pos.add(new Vec3i(info.placementInfo.placementPosition));
    Integer displayList = (Integer)cache.get(key);
    if (displayList == null) {
      displayList = Integer.valueOf(GL11.glGenLists(1));
      GL11.glNewList(displayList.intValue(), 4864);
      doDraw(info, world, pos);
      GL11.glEndList();
      cache.put(key, displayList);
    } 
    try(OpenGL.With tex = OpenGL.bool(3553, false); 
        OpenGL.With color = OpenGL.color(1.0F, 0.0F, 0.0F, 1.0F)) {
      GL11.glCallList(displayList.intValue());
    } 
  }
}
package cam72cam.immersiverailroading.render.rail;

import cam72cam.immersiverailroading.render.DisplayListCache;
import cam72cam.immersiverailroading.track.TrackBase;
import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.render.StandardModel;
import cam72cam.mod.world.World;
import org.lwjgl.opengl.GL11;

public class RailBaseRender {
  private static synchronized void drawSync(RailInfo info, World world) {
    if (info.settings.railBed.isEmpty())
      return; 
    StandardModel model = new StandardModel();
    for (TrackBase base : info.getBuilder(world).getTracksForRender())
      model.addItemBlock(info.settings.railBed, new Vec3d(base.getPos()), new Vec3d(1.0D, (base.getBedHeight() + 0.1F * (float)info.settings.gauge.scale()), 1.0D)); 
    model.render();
  }
  
  private static DisplayListCache displayLists = new DisplayListCache();
  
  public static void draw(RailInfo info, World world) {
    Integer displayList = (Integer)displayLists.get(info.uniqueID);
    if (displayList == null) {
      displayList = Integer.valueOf(GL11.glGenLists(1));
      GL11.glNewList(displayList.intValue(), 4864);
      drawSync(info, world);
      GL11.glEndList();
      displayLists.put(info.uniqueID, displayList);
    } 
    GL11.glCallList(displayList.intValue());
  }
}
package cam72cam.immersiverailroading.render.rail;

import cam72cam.immersiverailroading.model.TrackModel;
import cam72cam.immersiverailroading.registry.DefinitionManager;
import cam72cam.immersiverailroading.render.ExpireableList;
import cam72cam.immersiverailroading.render.StockRenderCache;
import cam72cam.immersiverailroading.track.BuilderBase;
import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.MinecraftClient;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.render.VBO;
import cam72cam.mod.render.obj.OBJRender;
import cam72cam.mod.render.obj.OBJVBO;
import cam72cam.mod.world.World;
import java.util.List;
import java.util.stream.Collectors;
import util.Matrix4;

public class RailBuilderRender {
  private static final ExpireableList<String, VBO> cache = new ExpireableList<String, VBO>() {
      public void onRemove(String key, VBO value) {
        value.free();
      }
    };
  
  public static void renderRailBuilder(RailInfo info, World world) {
    TrackModel model = DefinitionManager.getTrack(info.settings.track, info.settings.gauge.value());
    if (model == null)
      return; 
    OBJRender trackRenderer = StockRenderCache.getTrackRenderer(model);
    VBO cached = (VBO)cache.get(info.uniqueID);
    if (cached == null) {
      OBJVBO.Builder builder = trackRenderer.getVBO().subModel();
      for (BuilderBase.VecYawPitch piece : info.getBuilder(world).getRenderData()) {
        Matrix4 m = new Matrix4();
        m.translate(piece.x, piece.y, piece.z);
        m.rotate(Math.toRadians(piece.getYaw()), 0.0D, 1.0D, 0.0D);
        m.rotate(Math.toRadians(piece.getPitch()), 1.0D, 0.0D, 0.0D);
        m.rotate(Math.toRadians(-90.0D), 0.0D, 1.0D, 0.0D);
        if (piece.getLength() != -1.0F)
          m.scale(piece.getLength() / info.settings.gauge.scale(), 1.0D, 1.0D); 
        double scale = info.settings.gauge.scale();
        m.scale(scale, scale, scale);
        if (piece.getGroups().size() != 0) {
          List<String> groups = (List<String>)trackRenderer.model.groups().stream().filter(group -> piece.getGroups().stream().anyMatch(group::contains)).collect(Collectors.toList());
          builder.draw(groups, m);
          continue;
        } 
        builder.draw(m);
      } 
      cached = builder.build();
      cache.put(info.uniqueID, cached);
    } 
    MinecraftClient.startProfiler("irTrackModel");
    try(OpenGL.With tex = trackRenderer.bindTexture(); VBO.BoundVBO vbo = cached.bind()) {
      vbo.draw();
    } 
    MinecraftClient.endProfiler();
  }
}
package cam72cam.immersiverailroading.render.rail;

import cam72cam.immersiverailroading.IRItems;
import cam72cam.immersiverailroading.tile.TileRailPreview;
import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.MinecraftClient;
import cam72cam.mod.item.CustomItem;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.render.StandardModel;
import org.lwjgl.opengl.GL11;

public class RailPreviewRender {
  public static StandardModel render(TileRailPreview te) {
    RailInfo info = te.getRailRenderInfo();
    if (info == null)
      return null; 
    StandardModel model = new StandardModel();
    model.addCustom(() -> {
          MinecraftClient.startProfiler("tile_rail_preview");
          try(OpenGL.With transparency = OpenGL.transparency(1.0F, 1.0F, 1.0F, 0.7F); OpenGL.With matrix = OpenGL.matrix()) {
            if (te.isAboveRails())
              GL11.glTranslated(0.0D, -1.0D, 0.0D); 
            Vec3d placementPosition = info.placementInfo.placementPosition;
            GL11.glTranslated(placementPosition.x, placementPosition.y, placementPosition.z);
            if (!te.isMulti())
              RailRenderUtil.render(info, te.getWorld(), te.isAboveRails() ? te.getPos().down() : te.getPos(), true); 
          } 
          MinecraftClient.endProfiler();
        });
    model.addItem(new ItemStack((CustomItem)IRItems.ITEM_GOLDEN_SPIKE, 1), new Vec3d(0.5D, 0.5D, 0.5D), new Vec3d(1.0D, 1.0D, 1.0D));
    return model;
  }
}
package cam72cam.immersiverailroading.render.rail;

import cam72cam.immersiverailroading.util.RailInfo;
import cam72cam.mod.MinecraftClient;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.render.OpenGL;
import cam72cam.mod.world.World;
import org.lwjgl.opengl.GL11;

public class RailRenderUtil {
  public static void render(RailInfo info, World world, Vec3i pos, boolean renderOverlay) {
    try (OpenGL.With light = OpenGL.bool(2896, false)) {
      if (renderOverlay)
        try (OpenGL.With matrix = OpenGL.matrix()) {
          Vec3d off = info.placementInfo.placementPosition;
          off = off.subtract(new Vec3d(new Vec3i(off)));
          GL11.glTranslated(-off.x, -off.y, -off.z);
          MinecraftClient.startProfiler("base");
          RailBaseRender.draw(info, world);
          MinecraftClient.endProfiler();
          MinecraftClient.startProfiler("overlay");
          RailBaseOverlayRender.draw(info, world, pos);
          MinecraftClient.endProfiler();
        }  
      MinecraftClient.startProfiler("rail");
      RailBuilderRender.renderRailBuilder(info, world);
      MinecraftClient.endProfiler();
    } 
  }
}
package cam72cam.immersiverailroading.multiblock;

import cam72cam.immersiverailroading.Config;
import cam72cam.immersiverailroading.IRItems;
import cam72cam.immersiverailroading.items.ItemPlate;
import cam72cam.immersiverailroading.items.ItemRollingStockComponent;
import cam72cam.immersiverailroading.library.ItemComponentType;
import cam72cam.immersiverailroading.library.PlateType;
import cam72cam.immersiverailroading.tile.TileMultiblock;
import cam72cam.mod.energy.IEnergy;
import cam72cam.mod.entity.Player;
import cam72cam.mod.item.CustomItem;
import cam72cam.mod.item.Fuzzy;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Rotation;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.sound.Audio;
import cam72cam.mod.sound.SoundCategory;
import cam72cam.mod.sound.StandardSound;
import cam72cam.mod.world.World;

public class BoilerRollerMultiblock extends Multiblock {
  private static Multiblock.FuzzyProvider slab = () -> Fuzzy.STONE_SLAB;
  
  public static final String NAME = "BOILER_MACHINE";
  
  private static final Vec3i render = new Vec3i(2, 0, 0);
  
  private static final Vec3i power = new Vec3i(5, 0, 3);
  
  private static final Vec3i crafting = new Vec3i(2, 0, 4);
  
  private static Multiblock.FuzzyProvider[][][] componentGenerator() {
    Multiblock.FuzzyProvider[] bed = { L_ENG(), L_ENG(), L_ENG(), L_ENG(), H_ENG(), H_ENG() };
    Multiblock.FuzzyProvider[] table = { slab, slab, slab, slab, AIR, AIR };
    Multiblock.FuzzyProvider[][][] result = { { table }, { table }, { table }, { bed }, { bed }, { table }, { table }, { table } };
    return result;
  }
  
  public BoilerRollerMultiblock() {
    super("BOILER_MACHINE", componentGenerator());
  }
  
  public Vec3i placementPos() {
    return new Vec3i(2, 0, 0);
  }
  
  protected Multiblock.MultiblockInstance newInstance(World world, Vec3i origin, Rotation rot) {
    return new BoilerRollerInstance(world, origin, rot);
  }
  
  public class BoilerRollerInstance extends Multiblock.MultiblockInstance {
    public BoilerRollerInstance(World world, Vec3i origin, Rotation rot) {
      super(world, origin, rot);
    }
    
    public boolean onBlockActivated(Player player, Player.Hand hand, Vec3i offset) {
      if (this.world.isClient)
        return false; 
      if (!player.isCrouching()) {
        ItemStack held = player.getHeldItem(hand);
        if (held.isEmpty()) {
          TileMultiblock craftTe = getTile(BoilerRollerMultiblock.crafting);
          if (craftTe == null)
            return false; 
          ItemStack outstack = craftTe.getContainer().get(1);
          if (!outstack.isEmpty()) {
            this.world.dropItem(outstack, player.getPosition());
            craftTe.getContainer().set(1, ItemStack.EMPTY);
          } 
        } else if (held.is((CustomItem)IRItems.ITEM_PLATE) && (new ItemPlate.Data(held)).type == PlateType.BOILER) {
          TileMultiblock craftTe = getTile(BoilerRollerMultiblock.crafting);
          if (craftTe == null)
            return false; 
          if (craftTe.getContainer().get(0).isEmpty()) {
            ItemStack inputStack = held.copy();
            inputStack.setCount(1);
            craftTe.getContainer().set(0, inputStack);
            held.shrink(1);
            player.setHeldItem(hand, held);
          } 
        } 
      } 
      return false;
    }
    
    public boolean isRender(Vec3i offset) {
      return offset.equals(BoilerRollerMultiblock.render);
    }
    
    public int getInvSize(Vec3i offset) {
      return offset.equals(BoilerRollerMultiblock.crafting) ? 2 : 0;
    }
    
    public void tick(Vec3i offset) {
      if (!offset.equals(BoilerRollerMultiblock.crafting))
        return; 
      TileMultiblock craftTe = getTile(BoilerRollerMultiblock.crafting);
      if (craftTe == null)
        return; 
      TileMultiblock powerTe = getTile(BoilerRollerMultiblock.power);
      if (powerTe == null)
        return; 
      if (!hasPower())
        return; 
      if (this.world.isClient) {
        if (craftTe.getRenderTicks() % 10L == 0L && craftTe.getCraftProgress() != 0)
          Audio.playSound(this.world, craftTe.getPos(), StandardSound.BLOCK_ANVIL_PLACE, SoundCategory.BLOCKS, 1.0F, 0.2F); 
        return;
      } 
      if (craftTe.getCraftProgress() != 0) {
        IEnergy energy = powerTe.getEnergy(null);
        energy.extract(powerRequired(), false);
        craftTe.setCraftProgress(Math.max(0, craftTe.getCraftProgress() - 1));
      } 
      float progress = craftTe.getCraftProgress();
      ItemStack input = craftTe.getContainer().get(0);
      ItemStack output = craftTe.getContainer().get(1);
      if (progress == 0.0F)
        if (input.is((CustomItem)IRItems.ITEM_PLATE) && (new ItemPlate.Data(input)).type == PlateType.BOILER && output.isEmpty()) {
          progress = 100.0F;
          craftTe.setCraftProgress(100);
        }  
      if (progress == 1.0F) {
        ItemStack out = new ItemStack((CustomItem)IRItems.ITEM_ROLLING_STOCK_COMPONENT, 1);
        ItemPlate.Data source = new ItemPlate.Data(input);
        ItemRollingStockComponent.Data data = new ItemRollingStockComponent.Data(out);
        data.def = source.def;
        data.gauge = source.gauge;
        data.componentType = ItemComponentType.BOILER_SEGMENT;
        data.write();
        craftTe.getContainer().set(1, out);
        input.shrink(1);
        craftTe.getContainer().set(0, input);
      } 
    }
    
    public boolean canInsertItem(Vec3i pos, int slot, ItemStack stack) {
      return false;
    }
    
    public boolean isOutputSlot(Vec3i pos, int slot) {
      return false;
    }
    
    public int getSlotLimit(Vec3i offset, int slot) {
      return offset.equals(BoilerRollerMultiblock.crafting) ? 1 : 0;
    }
    
    public boolean canRecievePower(Vec3i offset) {
      return offset.equals(BoilerRollerMultiblock.power);
    }
    
    public boolean hasPower() {
      TileMultiblock powerTe = getTile(BoilerRollerMultiblock.power);
      if (powerTe == null)
        return false; 
      return (powerTe.getEnergy(null).getCurrent() >= powerRequired());
    }
    
    public boolean hasInput() {
      TileMultiblock craftTe = getTile(BoilerRollerMultiblock.crafting);
      if (craftTe == null)
        return false; 
      return !craftTe.getContainer().get(0).isEmpty();
    }
    
    public boolean hasOutput() {
      TileMultiblock craftTe = getTile(BoilerRollerMultiblock.crafting);
      if (craftTe == null)
        return false; 
      return !craftTe.getContainer().get(1).isEmpty();
    }
    
    private int powerRequired() {
      return (int)Math.ceil((32.0F * Config.ConfigBalance.machinePowerFactor));
    }
  }
}
package cam72cam.immersiverailroading.multiblock;

import cam72cam.immersiverailroading.Config;
import cam72cam.immersiverailroading.library.CraftingMachineMode;
import cam72cam.immersiverailroading.library.GuiTypes;
import cam72cam.immersiverailroading.tile.TileMultiblock;
import cam72cam.immersiverailroading.util.ItemCastingCost;
import cam72cam.mod.energy.IEnergy;
import cam72cam.mod.entity.Entity;
import cam72cam.mod.entity.Player;
import cam72cam.mod.entity.boundingbox.IBoundingBox;
import cam72cam.mod.item.Fuzzy;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Rotation;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.sound.Audio;
import cam72cam.mod.sound.SoundCategory;
import cam72cam.mod.sound.StandardSound;
import cam72cam.mod.world.World;
import java.util.List;

public class CastingMultiblock extends Multiblock {
  private static Multiblock.FuzzyProvider STONE = () -> Fuzzy.STONE_BRICK;
  
  private static Multiblock.FuzzyProvider SAND = () -> Fuzzy.SAND;
  
  public static final String NAME = "CASTING";
  
  private static final Vec3i render = new Vec3i(3, 3, 7);
  
  private static final Vec3i fluid = new Vec3i(3, 3, 3);
  
  private static final Vec3i craft = new Vec3i(3, 2, 3);
  
  private static final Vec3i output = new Vec3i(1, 0, 14);
  
  private static final Vec3i power = new Vec3i(3, 7, 0);
  
  public static final double max_volume = 810.0D;
  
  private static Multiblock.FuzzyProvider[][][] cast_blueprint() {
    Multiblock.FuzzyProvider[][][] bp = new Multiblock.FuzzyProvider[23][][];
    int z;
    for (z = 0; z < 7; z++) {
      Multiblock.FuzzyProvider[] base = { AIR, AIR, AIR, AIR, AIR, AIR, AIR };
      if (z > 0 && z < 6)
        if (z > 1 && z < 5) {
          base = new Multiblock.FuzzyProvider[] { AIR, S_SCAF(), S_SCAF(), S_SCAF(), S_SCAF(), S_SCAF(), AIR };
        } else {
          base = new Multiblock.FuzzyProvider[] { AIR, AIR, S_SCAF(), S_SCAF(), S_SCAF(), AIR, AIR };
        }  
      Multiblock.FuzzyProvider[] top = { AIR, AIR, CASING(), H_ENG(), CASING(), AIR, AIR };
      Multiblock.FuzzyProvider[] topfirst = { AIR, AIR, CASING(), H_ENG(), CASING(), AIR, AIR };
      if (z > 0 && z < 6)
        if (z > 1 && z < 5) {
          top = new Multiblock.FuzzyProvider[] { CASING(), AIR, AIR, AIR, AIR, AIR, CASING() };
          topfirst = new Multiblock.FuzzyProvider[] { CASING(), CASING(), CASING(), H_ENG(), CASING(), CASING(), CASING() };
        } else {
          top = new Multiblock.FuzzyProvider[] { AIR, CASING(), AIR, AIR, AIR, CASING(), AIR };
          topfirst = new Multiblock.FuzzyProvider[] { AIR, CASING(), CASING(), H_ENG(), CASING(), CASING(), AIR };
        }  
      bp[z] = new Multiblock.FuzzyProvider[8][];
      for (int y = 0; y < 8; y++) {
        if (y < 3) {
          bp[z][y] = base;
        } else if (y == 3) {
          bp[z][y] = topfirst;
        } else {
          bp[z][y] = top;
        } 
      } 
    } 
    for (z = 7; z < 23; z++) {
      if (z == 7) {
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[4][])[0] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[4][])[1] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[4][])[2] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = AIR;
        (new Multiblock.FuzzyProvider[7])[2] = AIR;
        (new Multiblock.FuzzyProvider[7])[3] = 
          
          STEEL();
        (new Multiblock.FuzzyProvider[7])[4] = AIR;
        (new Multiblock.FuzzyProvider[7])[5] = AIR;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[4][])[3] = new Multiblock.FuzzyProvider[7];
        bp[z] = new Multiblock.FuzzyProvider[4][];
      } else if (z == 22) {
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[0] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[1] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = STONE;
        (new Multiblock.FuzzyProvider[7])[3] = STONE;
        (new Multiblock.FuzzyProvider[7])[4] = STONE;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[2] = new Multiblock.FuzzyProvider[7];
        bp[z] = new Multiblock.FuzzyProvider[3][];
      } else {
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = SAND;
        (new Multiblock.FuzzyProvider[7])[3] = SAND;
        (new Multiblock.FuzzyProvider[7])[4] = SAND;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[0] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = SAND;
        (new Multiblock.FuzzyProvider[7])[3] = SAND;
        (new Multiblock.FuzzyProvider[7])[4] = SAND;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[1] = new Multiblock.FuzzyProvider[7];
        (new Multiblock.FuzzyProvider[7])[0] = AIR;
        (new Multiblock.FuzzyProvider[7])[1] = STONE;
        (new Multiblock.FuzzyProvider[7])[2] = SAND;
        (new Multiblock.FuzzyProvider[7])[3] = SAND;
        (new Multiblock.FuzzyProvider[7])[4] = SAND;
        (new Multiblock.FuzzyProvider[7])[5] = STONE;
        (new Multiblock.FuzzyProvider[7])[6] = AIR;
        (new Multiblock.FuzzyProvider[3][])[2] = new Multiblock.FuzzyProvider[7];
        bp[z] = new Multiblock.FuzzyProvider[3][];
      } 
    } 
    return bp;
  }
  
  public CastingMultiblock() {
    super("CASTING", cast_blueprint());
  }
  
  public Vec3i placementPos() {
    return new Vec3i(3, 0, 0);
  }
  
  protected Multiblock.MultiblockInstance newInstance(World world, Vec3i origin, Rotation rot) {
    return new CastingInstance(world, origin, rot);
  }
  
  public class CastingInstance extends Multiblock.MultiblockInstance {
    public CastingInstance(World world, Vec3i origin, Rotation rot) {
      super(world, origin, rot);
    }
    
    public boolean onBlockActivated(Player player, Player.Hand hand, Vec3i offset) {
      TileMultiblock outTe = getTile(CastingMultiblock.output);
      if (outTe == null)
        return false; 
      TileMultiblock craftTe = getTile(CastingMultiblock.craft);
      if (craftTe == null)
        return false; 
      if (!outTe.getContainer().get(0).isEmpty()) {
        if (this.world.isServer) {
          this.world.dropItem(outTe.getContainer().get(0), player.getPosition());
          outTe.getContainer().set(0, ItemStack.EMPTY);
        } 
      } else if (this.world.isClient) {
        Vec3i pos = getPos(CastingMultiblock.craft);
        GuiTypes.CASTING.open(player, pos);
      } 
      return true;
    }
    
    public boolean isRender(Vec3i offset) {
      return CastingMultiblock.render.equals(offset);
    }
    
    public int getInvSize(Vec3i offset) {
      return CastingMultiblock.output.equals(offset) ? 1 : 0;
    }
    
    public void tick(Vec3i offset) {
      TileMultiblock powerTe = getTile(CastingMultiblock.power);
      if (powerTe == null)
        return; 
      IEnergy energy = powerTe.getEnergy(null);
      if (this.world.isClient) {
        if (offset.z > 7 && offset.y > 1 && isPouring()) {
          Vec3d pos = (new Vec3d(getPos(offset))).add(0.0D, 1.0D, 0.0D).add(0.5D, 0.5D, 0.5D);
          if (Math.random() < 0.01D) {
            this.world.createParticle(World.ParticleType.SMOKE, pos, Vec3d.ZERO);
            this.world.createParticle(World.ParticleType.SMOKE, pos, Vec3d.ZERO);
          } 
          if (Math.random() < 0.001D)
            Audio.playSound(this.world, pos, StandardSound.BLOCK_FIRE_EXTINGUISH, SoundCategory.BLOCKS, 1.0F, 0.25F); 
        } 
        return;
      } 
      if (offset.equals(CastingMultiblock.fluid)) {
        TileMultiblock fluidTe = getTile(CastingMultiblock.fluid);
        if (fluidTe == null)
          return; 
        IBoundingBox meltBounds = IBoundingBox.from(getPos(offset.add(0, 1, 0))).grow(new Vec3d(2.0D, 0.5D, 2.0D));
        IBoundingBox damageBounds = meltBounds.expand(new Vec3d(0.0D, 2.5D, 0.0D));
        List<ItemStack> dropped = this.world.getDroppedItems(meltBounds);
        for (ItemStack stack : dropped) {
          ItemStack craftStack = stack.copy();
          int cost = ItemCastingCost.getCastCost(craftStack);
          if (cost != -999) {
            cost /= craftStack.getCount();
            while (stack.getCount() != 0 && fluidTe.getCraftProgress() < 810.0D + cost && 
              hasPower()) {
              energy.extract(powerRequired(), false);
              stack.shrink(1);
              fluidTe.setCraftProgress(fluidTe.getCraftProgress() + cost);
            } 
            continue;
          } 
          if (fluidTe.getCraftProgress() > 0)
            stack.setCount(0); 
        } 
        List<Entity> living = this.world.getEntities(ent -> ((ent.isPlayer() || ent.isLiving()) && ent.getBounds().intersects(damageBounds)), Entity.class);
        for (Entity alive : living)
          alive.directDamage("immersiverailroading:casting", 5.0D); 
      } 
      if (offset.equals(CastingMultiblock.craft)) {
        if (!hasPower())
          return; 
        TileMultiblock fluidTe = getTile(CastingMultiblock.fluid);
        if (fluidTe == null)
          return; 
        TileMultiblock craftTe = getTile(CastingMultiblock.craft);
        if (craftTe == null)
          return; 
        TileMultiblock outTe = getTile(CastingMultiblock.output);
        if (outTe == null)
          return; 
        ItemStack item = craftTe.getCraftItem();
        if (item == null || item.isEmpty())
          return; 
        CraftingMachineMode mode = craftTe.getCraftMode();
        if (mode == CraftingMachineMode.STOPPED)
          return; 
        if (!outTe.getContainer().get(0).isEmpty())
          return; 
        int cost = ItemCastingCost.getCastCost(item);
        if (cost == -999)
          return; 
        if (craftTe.getCraftProgress() >= cost) {
          craftTe.setCraftProgress(0);
          if (mode == CraftingMachineMode.SINGLE)
            craftTe.setCraftMode(CraftingMachineMode.STOPPED); 
          ItemStack outputItem = item.copy();
          if (outputItem.getTagCompound().isEmpty())
            outputItem.clearTagCompound(); 
          outTe.getContainer().set(0, outputItem);
        } else if (craftTe.getRenderTicks() % 10L == 0L && 
          fluidTe.getCraftProgress() > 0) {
          fluidTe.setCraftProgress(fluidTe.getCraftProgress() - 1);
          craftTe.setCraftProgress(craftTe.getCraftProgress() + 1);
        } 
      } 
      if (offset.equals(CastingMultiblock.power))
        energy.extract(powerRequired(), false); 
    }
    
    public boolean canInsertItem(Vec3i offset, int slot, ItemStack stack) {
      return false;
    }
    
    public boolean isOutputSlot(Vec3i offset, int slot) {
      return offset.equals(CastingMultiblock.output);
    }
    
    public int getSlotLimit(Vec3i offset, int slot) {
      return CastingMultiblock.output.equals(offset) ? 1 : 0;
    }
    
    public boolean canRecievePower(Vec3i offset) {
      return offset.equals(CastingMultiblock.power);
    }
    
    public boolean hasPower() {
      TileMultiblock powerTe = getTile(CastingMultiblock.power);
      if (powerTe == null)
        return false; 
      return (powerTe.getEnergy(null).getCurrent() >= powerRequired());
    }
    
    public boolean isPouring() {
      TileMultiblock craftTe = getTile(CastingMultiblock.craft);
      if (craftTe == null)
        return false; 
      TileMultiblock fluidTe = getTile(CastingMultiblock.fluid);
      if (fluidTe == null)
        return false; 
      return (craftTe.getCraftProgress() > 0 && fluidTe.getCraftProgress() > 0);
    }
    
    public double getSteelLevel() {
      TileMultiblock fluidTe = getTile(CastingMultiblock.fluid);
      if (fluidTe == null)
        return 0.0D; 
      return fluidTe.getCraftProgress() / 810.0D;
    }
    
    public ItemStack getCraftItem() {
      TileMultiblock craftingTe = getTile(CastingMultiblock.craft);
      if (craftingTe == null)
        return ItemStack.EMPTY; 
      return craftingTe.getCraftItem();
    }
    
    private int powerRequired() {
      return (int)Math.ceil((32.0F * Config.ConfigBalance.machinePowerFactor));
    }
  }
}
package cam72cam.immersiverailroading.multiblock;

import cam72cam.immersiverailroading.IRBlocks;
import cam72cam.immersiverailroading.ImmersiveRailroading;
import cam72cam.immersiverailroading.library.ChatText;
import cam72cam.immersiverailroading.tile.TileMultiblock;
import cam72cam.immersiverailroading.util.BlockUtil;
import cam72cam.immersiverailroading.util.IRFuzzy;
import cam72cam.mod.block.BlockType;
import cam72cam.mod.entity.Player;
import cam72cam.mod.item.ClickResult;
import cam72cam.mod.item.Fuzzy;
import cam72cam.mod.item.IInventory;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Rotation;
import cam72cam.mod.math.Vec3d;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.text.PlayerMessage;
import cam72cam.mod.world.BlockInfo;
import cam72cam.mod.world.World;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public abstract class Multiblock {
  private final FuzzyProvider[][][] components;
  
  private final String name;
  
  protected final List<Vec3i> componentPositions;
  
  protected static final FuzzyProvider AIR = null;
  
  protected static FuzzyProvider STEEL() {
    return IRFuzzy::steelBlockOrFallback;
  }
  
  protected static FuzzyProvider CASING() {
    return () -> IRFuzzy.IR_CASTING_CASING.isEmpty() ? Fuzzy.NETHER_BRICK : IRFuzzy.IR_CASTING_CASING;
  }
  
  protected static FuzzyProvider L_ENG() {
    return () -> IRFuzzy.IR_LIGHT_ENG.isEmpty() ? Fuzzy.IRON_BLOCK : IRFuzzy.IR_LIGHT_ENG;
  }
  
  protected static FuzzyProvider H_ENG() {
    return () -> IRFuzzy.IR_HEAVY_ENG.isEmpty() ? Fuzzy.IRON_BLOCK : IRFuzzy.IR_HEAVY_ENG;
  }
  
  protected static FuzzyProvider S_SCAF() {
    return () -> IRFuzzy.IR_SCAFFOLDING.isEmpty() ? Fuzzy.IRON_BARS : IRFuzzy.IR_SCAFFOLDING;
  }
  
  protected Multiblock(String name, FuzzyProvider[][][] components) {
    this.name = name;
    this.components = components;
    this.componentPositions = new ArrayList<>();
    for (int z = 0; z < components.length; z++) {
      FuzzyProvider[][] zcomp = components[z];
      for (int y = 0; y < (components[z]).length; y++) {
        FuzzyProvider[] ycomp = zcomp[y];
        for (int x = 0; x < ycomp.length; x++) {
          if (components[z][y][x] != null)
            this.componentPositions.add(new Vec3i(x, y, z)); 
        } 
      } 
    } 
  }
  
  private Fuzzy lookup(Vec3i offset) {
    return this.components[offset.z][offset.y][offset.x].get();
  }
  
  private boolean checkValid(World world, Vec3i origin, Vec3i offset, Rotation rot) {
    Vec3i pos = origin.add(offset.rotate(rot));
    Fuzzy component = lookup(offset);
    return component.matches(world.getItemStack(pos));
  }
  
  public boolean tryCreate(World world, Vec3i pos) {
    for (Vec3i activationLocation : this.componentPositions) {
      for (Rotation rot : Rotation.values()) {
        Vec3i origin = pos.subtract(activationLocation.rotate(rot));
        boolean valid = true;
        for (Vec3i offset : this.componentPositions)
          valid = (valid && checkValid(world, origin, offset, rot)); 
        if (valid) {
          if (world.isServer)
            instance(world, origin, rot).onCreate(); 
          return true;
        } 
      } 
    } 
    return false;
  }
  
  public void place(World world, Player player, Vec3i pos, Rotation rot) {
    Map<String, Integer> missing = new HashMap<>();
    Vec3i origin = pos.subtract(placementPos().rotate(rot));
    for (Vec3i offset : this.componentPositions) {
      Fuzzy component = lookup(offset);
      Vec3i compPos = origin.add(offset.rotate(rot));
      if (!component.matches(world.getItemStack(compPos)) && 
        !world.isAir(compPos)) {
        if (BlockUtil.canBeReplaced(world, compPos, false)) {
          world.breakBlock(compPos, true);
          continue;
        } 
        player.sendMessage(ChatText.INVALID_BLOCK.getMessage(new Object[] { Integer.valueOf(compPos.x), Integer.valueOf(compPos.y), Integer.valueOf(compPos.z) }));
        return;
      } 
    } 
    for (Vec3i offset : this.componentPositions) {
      Fuzzy component = lookup(offset);
      Vec3i compPos = origin.add(offset.rotate(rot));
      if (!component.matches(world.getItemStack(compPos)) && 
        !place(component, world, player, compPos)) {
        Set<String> exStrs = (Set<String>)component.enumerate().stream().map(ItemStack::getDisplayName).collect(Collectors.toSet());
        String example = String.join(" | ", (Iterable)exStrs);
        if (exStrs.size() > 1)
          example = "[ " + example + " ]"; 
        if (!missing.containsKey(example))
          missing.put(example, Integer.valueOf(0)); 
        missing.put(example, Integer.valueOf(((Integer)missing.get(example)).intValue() + 1));
      } 
    } 
    if (missing.size() != 0) {
      player.sendMessage(ChatText.BUILD_MISSING.getMessage(new Object[] { "", "" }));
      for (String name : missing.keySet()) {
        player.sendMessage(PlayerMessage.direct(String.format("  - %d x %s", new Object[] { missing.get(name), name })));
      } 
    } 
  }
  
  private boolean place(Fuzzy fuzzy, World world, Player player, Vec3i pos) {
    if (player.isCreative()) {
      if (fuzzy.example() != null)
        world.setBlock(pos, fuzzy.example()); 
      return true;
    } 
    IInventory inv = player.getInventory();
    for (int slot = 0; slot < inv.getSlotCount(); slot++) {
      ItemStack stack = inv.get(slot);
      if (fuzzy.matches(stack)) {
        int count = stack.getCount();
        ItemStack backup = player.getHeldItem(Player.Hand.PRIMARY).copy();
        player.setHeldItem(Player.Hand.PRIMARY, stack.copy());
        ClickResult result = player.clickBlock(Player.Hand.PRIMARY, pos, new Vec3d(0.5D, 0.0D, 0.5D));
        player.setHeldItem(Player.Hand.PRIMARY, backup);
        if (result == ClickResult.ACCEPTED) {
          if (inv.get(slot).getCount() == count) {
            stack.setCount(stack.getCount() - 1);
            inv.set(slot, stack);
          } 
          return true;
        } 
      } 
    } 
    return false;
  }
  
  public Map<Vec3i, ItemStack> blueprint() {
    Map<Vec3i, ItemStack> result = new HashMap<>();
    for (Vec3i offset : this.componentPositions) {
      Fuzzy component = lookup(offset);
      result.put(offset, component.example());
    } 
    return result;
  }
  
  public MultiblockInstance instance(World world, Vec3i origin, Rotation rot) {
    return newInstance(world, origin, rot);
  }
  
  public String getName() {
    return this.name;
  }
  
  public abstract Vec3i placementPos();
  
  protected abstract MultiblockInstance newInstance(World paramWorld, Vec3i paramVec3i, Rotation paramRotation);
  
  public abstract class MultiblockInstance {
    protected final World world;
    
    protected final Vec3i origin;
    
    protected final Rotation rot;
    
    public MultiblockInstance(World world, Vec3i origin, Rotation rot) {
      this.world = world;
      this.origin = origin;
      this.rot = rot;
    }
    
    public void onCreate() {
      for (Vec3i offset : Multiblock.this.componentPositions) {
        Vec3i pos = getPos(offset);
        BlockInfo origState = this.world.getBlock(pos);
        this.world.setBlock(pos, (BlockType)IRBlocks.BLOCK_MULTIBLOCK);
        TileMultiblock te = (TileMultiblock)this.world.getBlockEntity(pos, TileMultiblock.class);
        te.configure(Multiblock.this.name, this.rot, offset, origState);
      } 
    }
    
    public abstract boolean onBlockActivated(Player param1Player, Player.Hand param1Hand, Vec3i param1Vec3i);
    
    public abstract int getInvSize(Vec3i param1Vec3i);
    
    public abstract boolean isRender(Vec3i param1Vec3i);
    
    public abstract void tick(Vec3i param1Vec3i);
    
    public abstract boolean canInsertItem(Vec3i param1Vec3i, int param1Int, ItemStack param1ItemStack);
    
    public abstract boolean isOutputSlot(Vec3i param1Vec3i, int param1Int);
    
    public abstract int getSlotLimit(Vec3i param1Vec3i, int param1Int);
    
    public abstract boolean canRecievePower(Vec3i param1Vec3i);
    
    public void onBreak() {
      for (Vec3i offset : Multiblock.this.componentPositions) {
        Vec3i pos = getPos(offset);
        TileMultiblock te = (TileMultiblock)this.world.getBlockEntity(pos, TileMultiblock.class);
        if (te == null) {
          this.world.breakBlock(pos, true);
          continue;
        } 
        te.onBreakEvent();
      } 
    }
    
    protected Vec3i getPos(Vec3i offset) {
      return this.origin.add(offset.rotate(this.rot));
    }
    
    protected TileMultiblock getTile(Vec3i offset) {
      TileMultiblock te = (TileMultiblock)this.world.getBlockEntity(getPos(offset), TileMultiblock.class);
      if (te == null) {
        if (this.world.isServer)
          ImmersiveRailroading.warn("Multiblock TE is null: %s %s %s %s", new Object[] { getPos(offset), offset, Boolean.valueOf(this.world.isClient), getClass() }); 
        return null;
      } 
      if (!te.isLoaded()) {
        if (this.world.isServer)
          ImmersiveRailroading.info("Multiblock is still loading: %s %s %s %s", new Object[] { getPos(offset), offset, Boolean.valueOf(this.world.isClient), getClass() }); 
        return null;
      } 
      return te;
    }
  }
  
  @FunctionalInterface
  public static interface FuzzyProvider {
    Fuzzy get();
  }
}
package cam72cam.immersiverailroading.multiblock;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MultiblockRegistry {
  private static final Map<String, Multiblock> entries = new HashMap<>();
  
  public static void register(String name, Multiblock mb) {
    entries.put(name, mb);
  }
  
  public static Multiblock get(String name) {
    return entries.get(name);
  }
  
  public static List<String> keys() {
    return new ArrayList<>(entries.keySet());
  }
  
  public static List<Multiblock> registered() {
    return new ArrayList<>(entries.values());
  }
}
package cam72cam.immersiverailroading.multiblock;

import cam72cam.immersiverailroading.Config;
import cam72cam.immersiverailroading.library.GuiTypes;
import cam72cam.immersiverailroading.tile.TileMultiblock;
import cam72cam.immersiverailroading.util.IRFuzzy;
import cam72cam.mod.energy.IEnergy;
import cam72cam.mod.entity.Player;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Rotation;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.sound.Audio;
import cam72cam.mod.sound.SoundCategory;
import cam72cam.mod.sound.StandardSound;
import cam72cam.mod.world.World;

public class PlateRollerMultiblock extends Multiblock {
  public static final String NAME = "PLATE_MACHINE";
  
  private static final Vec3i render = new Vec3i(2, 0, 0);
  
  private static final Vec3i crafter = new Vec3i(2, 0, 14);
  
  private static final Vec3i input = new Vec3i(2, 0, 0);
  
  private static final Vec3i output = new Vec3i(2, 0, 29);
  
  private static final Vec3i power = new Vec3i(1, 4, 14);
  
  private static Multiblock.FuzzyProvider[][][] componentGenerator() {
    Multiblock.FuzzyProvider[][][] result = new Multiblock.FuzzyProvider[30][][];
    Multiblock.FuzzyProvider[] bed = { L_ENG(), S_SCAF(), S_SCAF(), S_SCAF(), L_ENG() };
    Multiblock.FuzzyProvider[] mid = { L_ENG(), AIR, AIR, AIR, L_ENG() };
    Multiblock.FuzzyProvider[] top = { H_ENG(), H_ENG(), H_ENG(), H_ENG(), H_ENG() };
    for (int i = 0; i < 30; i++) {
      if (i >= 11 && i <= 18) {
        if (i >= 13 && i <= 16) {
          if (i == 14) {
            (new Multiblock.FuzzyProvider[5][])[0] = bed;
            (new Multiblock.FuzzyProvider[5][])[1] = mid;
            (new Multiblock.FuzzyProvider[5][])[2] = top;
            (new Multiblock.FuzzyProvider[5])[0] = AIR;
            (new Multiblock.FuzzyProvider[5])[1] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[2] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[3] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[4] = AIR;
            (new Multiblock.FuzzyProvider[5][])[3] = new Multiblock.FuzzyProvider[5];
            (new Multiblock.FuzzyProvider[5])[0] = AIR;
            (new Multiblock.FuzzyProvider[5])[1] = H_ENG();
            (new Multiblock.FuzzyProvider[5])[2] = AIR;
            (new Multiblock.FuzzyProvider[5])[3] = AIR;
            (new Multiblock.FuzzyProvider[5])[4] = AIR;
            (new Multiblock.FuzzyProvider[5][])[4] = new Multiblock.FuzzyProvider[5];
            result[i] = new Multiblock.FuzzyProvider[5][];
          } else {
            (new Multiblock.FuzzyProvider[4][])[0] = bed;
            (new Multiblock.FuzzyProvider[4][])[1] = mid;
            (new Multiblock.FuzzyProvider[4][])[2] = top;
            (new Multiblock.FuzzyProvider[5])[0] = AIR;
            (new Multiblock.FuzzyProvider[5])[1] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[2] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[3] = L_ENG();
            (new Multiblock.FuzzyProvider[5])[4] = AIR;
            (new Multiblock.FuzzyProvider[4][])[3] = new Multiblock.FuzzyProvider[5];
            result[i] = new Multiblock.FuzzyProvider[4][];
          } 
        } else {
          (new Multiblock.FuzzyProvider[3][])[0] = bed;
          (new Multiblock.FuzzyProvider[3][])[1] = mid;
          (new Multiblock.FuzzyProvider[3][])[2] = top;
          result[i] = new Multiblock.FuzzyProvider[3][];
        } 
      } else {
        (new Multiblock.FuzzyProvider[1][])[0] = bed;
        result[i] = new Multiblock.FuzzyProvider[1][];
      } 
    } 
    return result;
  }
  
  public PlateRollerMultiblock() {
    super("PLATE_MACHINE", componentGenerator());
  }
  
  public Vec3i placementPos() {
    return new Vec3i(2, 0, 0);
  }
  
  protected Multiblock.MultiblockInstance newInstance(World world, Vec3i origin, Rotation rot) {
    return new PlateRollerInstance(world, origin, rot);
  }
  
  public class PlateRollerInstance extends Multiblock.MultiblockInstance {
    public PlateRollerInstance(World world, Vec3i origin, Rotation rot) {
      super(world, origin, rot);
    }
    
    public boolean onBlockActivated(Player player, Player.Hand hand, Vec3i offset) {
      if (!player.isCrouching()) {
        ItemStack held = player.getHeldItem(hand);
        if (held.isEmpty()) {
          TileMultiblock outputTe = getTile(PlateRollerMultiblock.output);
          if (outputTe == null)
            return false; 
          if (!outputTe.getContainer().get(0).isEmpty()) {
            if (this.world.isServer) {
              ItemStack outstack = outputTe.getContainer().get(0);
              this.world.dropItem(outstack, player.getPosition());
              outputTe.getContainer().set(0, ItemStack.EMPTY);
            } 
            return true;
          } 
        } else if (IRFuzzy.steelBlockOrFallback().matches(held)) {
          TileMultiblock inputTe = getTile(PlateRollerMultiblock.input);
          if (inputTe == null)
            return false; 
          if (inputTe.getContainer().get(0).isEmpty() && 
            this.world.isServer) {
            ItemStack inputStack = held.copy();
            inputStack.setCount(1);
            inputTe.getContainer().set(0, inputStack);
            held.shrink(1);
            player.setHeldItem(hand, held);
          } 
          return true;
        } 
        if (this.world.isClient) {
          Vec3i pos = getPos(PlateRollerMultiblock.crafter);
          GuiTypes.PLATE_ROLLER.open(player, pos);
        } 
        return true;
      } 
      return false;
    }
    
    public boolean isRender(Vec3i offset) {
      return PlateRollerMultiblock.render.equals(offset);
    }
    
    public int getInvSize(Vec3i offset) {
      return (offset.equals(PlateRollerMultiblock.input) || offset.equals(PlateRollerMultiblock.output)) ? 1 : 0;
    }
    
    public void tick(Vec3i offset) {
      if (!offset.equals(PlateRollerMultiblock.crafter))
        return; 
      TileMultiblock craftingTe = getTile(PlateRollerMultiblock.crafter);
      if (craftingTe == null)
        return; 
      TileMultiblock powerTe = getTile(PlateRollerMultiblock.power);
      if (powerTe == null)
        return; 
      TileMultiblock inputTe = getTile(PlateRollerMultiblock.input);
      if (inputTe == null)
        return; 
      TileMultiblock outputTe = getTile(PlateRollerMultiblock.output);
      if (outputTe == null)
        return; 
      if (!hasPower())
        return; 
      if (this.world.isClient) {
        if (craftingTe.getRenderTicks() % 10L == 0L && craftingTe.getCraftProgress() != 0)
          Audio.playSound(this.world, craftingTe.getPos(), StandardSound.BLOCK_ANVIL_PLACE, SoundCategory.BLOCKS, 1.0F, 0.2F); 
        return;
      } 
      if (craftingTe.getCraftProgress() != 0) {
        IEnergy energy = powerTe.getEnergy(null);
        energy.extract(powerRequired(), false);
        craftingTe.setCraftProgress(Math.max(0, craftingTe.getCraftProgress() - 1));
      } 
      float progress = craftingTe.getCraftProgress();
      ItemStack input = inputTe.getContainer().get(0);
      ItemStack output = outputTe.getContainer().get(0);
      if (progress == 0.0F)
        if (IRFuzzy.steelBlockOrFallback().matches(input) && output.isEmpty() && !craftingTe.getCraftItem().isEmpty()) {
          input.setCount(input.getCount() - 1);
          inputTe.getContainer().set(0, input);
          progress = 100.0F;
          craftingTe.setCraftProgress(100);
        }  
      if (progress == 1.0F)
        outputTe.getContainer().set(0, craftingTe.getCraftItem().copy()); 
    }
    
    public boolean canInsertItem(Vec3i offset, int slot, ItemStack stack) {
      return (offset.equals(PlateRollerMultiblock.input) && IRFuzzy.steelBlockOrFallback().matches(stack));
    }
    
    public boolean isOutputSlot(Vec3i offset, int slot) {
      return offset.equals(PlateRollerMultiblock.output);
    }
    
    public int getSlotLimit(Vec3i offset, int slot) {
      return (offset.equals(PlateRollerMultiblock.input) || offset.equals(PlateRollerMultiblock.output)) ? 1 : 0;
    }
    
    public boolean canRecievePower(Vec3i offset) {
      return offset.equals(PlateRollerMultiblock.power);
    }
    
    public boolean hasPower() {
      TileMultiblock powerTe = getTile(PlateRollerMultiblock.power);
      if (powerTe == null)
        return false; 
      return (powerTe.getEnergy(null).getCurrent() >= powerRequired());
    }
    
    private int powerRequired() {
      return (int)Math.ceil((32.0F * Config.ConfigBalance.machinePowerFactor));
    }
  }
}
package cam72cam.immersiverailroading.net;

import cam72cam.immersiverailroading.items.nbt.RailSettings;
import cam72cam.immersiverailroading.tile.TileRailPreview;
import cam72cam.mod.entity.Player;
import cam72cam.mod.item.ItemStack;
import cam72cam.mod.math.Vec3i;
import cam72cam.mod.net.Packet;
import cam72cam.mod.serialization.TagField;

public class ItemRailUpdatePacket extends Packet {
  @TagField
  private RailSettings settings;
  
  @TagField
  private Vec3i pos;
  
  public ItemRailUpdatePacket() {}
  
  public ItemRailUpdatePacket(RailSettings settings) {
    this.settings = settings;
  }
  
  public ItemRailUpdatePacket(Vec3i tilePreviewPos, RailSettings settings) {
    this.pos = tilePreviewPos;
    this.settings = settings;
  }
  
  public void handle() {
    if (this.pos != null) {
      TileRailPreview tile = (TileRailPreview)getWorld().getBlockEntity(this.pos, TileRailPreview.class);
      if (tile != null) {
        ItemStack item = tile.getItem();
        this.settings.write(item);
        tile.setItem(item, getPlayer());
      } 
    } else {
      Player player = getPlayer();
      ItemStack stack = player.getHeldItem(Player.Hand.PRIMARY);
      this.settings.write(stack);
      player.setHeldItem(Player.Hand.PRIMARY, stack);
    } 
  }
}
package com.mia.props;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.mia.craftstudio.CSModel;
import com.mia.craftstudio.IPackReaderCallback;
import com.mia.craftstudio.api.ICSProject;
import com.mia.craftstudio.minecraft.ModelMetadata;
import com.mia.craftstudio.minecraft.forge.CSLibMod;
import com.mia.props.client.container.GuiHandler;
import com.mia.props.common.BlockFake;
import com.mia.props.common.BlockProps;
import com.mia.props.common.ItemCratingClay;
import com.mia.props.common.ItemDecowand;
import com.mia.props.common.ItemProps;
import com.mia.props.common.TileTypeMap;
import com.mia.props.common.entities.EntityChairMount;
import com.mia.props.common.entities.TileDecobench;
import com.mia.props.events.CommonProxy;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import net.minecraft.block.Block;
import net.minecraft.init.Blocks;
import net.minecraft.init.Items;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.NonNullList;
import net.minecraft.util.ResourceLocation;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.ChunkCache;
import net.minecraft.world.IBlockAccess;
import net.minecraft.world.World;
import net.minecraftforge.common.config.Configuration;
import net.minecraftforge.fml.common.FMLLog;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.Mod.Instance;
import net.minecraftforge.fml.common.ProgressManager;
import net.minecraftforge.fml.common.SidedProxy;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLLoadCompleteEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.network.IGuiHandler;
import net.minecraftforge.fml.common.network.NetworkRegistry;
import net.minecraftforge.fml.common.registry.EntityRegistry;
import net.minecraftforge.fml.common.registry.ForgeRegistries;
import net.minecraftforge.oredict.OreDictionary;
import net.minecraftforge.registries.IForgeRegistryEntry;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Mod(modid = "props", name = "DecoCraft", version = "2.6.3.7", dependencies = "required-after-client:ptrmodellib@[1.0.5,);after:ptrmodellib", acceptedMinecraftVersions = "[1.12.2]")
public class Props {
  @Instance("props")
  public static Props instance;
  
  @SidedProxy(clientSide = "com.mia.props.events.ClientProxy", serverSide = "com.mia.props.events.CommonProxy")
  public static CommonProxy proxy;
  
  public static final String modid = "props";
  
  public static Logger log = LogManager.getLogger("props");
  
  public static int dataVersion = 1;
  
  public static Block blockProps;
  
  public static Block blockFake;
  
  public static Item itemProps;
  
  public static Item itemClay;
  
  public static ItemDecowand itemTool;
  
  public static HashSet<String> recipes = new HashSet<>();
  
  public static Map<Integer, DecoModelMetadata> modelData = new HashMap<Integer, DecoModelMetadata>() {
      public DecoModelMetadata get(Object key) {
        return containsKey(key) ? super.get(key) : super.get(Integer.valueOf(0));
      }
    };
  
  public static ICSProject csproject;
  
  public static class MetaVariantListNode {
    public Integer prevID;
    
    public Integer nextID;
    
    public Integer headID;
    
    public MetaVariantListNode(Integer p, Integer n, Integer h) {
      this.prevID = p;
      this.nextID = n;
      this.headID = h;
    }
    
    public String toString() {
      return "prevID: [" + this.prevID + "], nextID: [" + this.nextID + "], headID: [" + this.headID + "]";
    }
  }
  
  public HashMap<Integer, MetaVariantListNode> modelDataVariantsList = new HashMap<>();
  
  private static Configuration config = null;
  
  public static boolean clayDrops = false;
  
  public static boolean allowPropRecycling = true;
  
  public static final HashSet<ItemStack> allowableResourceItems = new HashSet<>();
  
  @EventHandler
  public void loadComplete(FMLLoadCompleteEvent event) {
    allowableResourceItems.add(new ItemStack(itemClay, 1, 32767));
    if (allowPropRecycling)
      allowableResourceItems.add(new ItemStack(itemProps, 1, 32767)); 
    allowableResourceItems.add(new ItemStack(Items.field_151119_aD));
    allowableResourceItems.add(new ItemStack(Blocks.field_150435_aG));
    for (TileDecobench.DyeResourceMap dyeMap : TileDecobench.DyeResourceMap.values()) {
      NonNullList nonNullList = OreDictionary.getOres(dyeMap.name());
      for (ItemStack dye : nonNullList)
        allowableResourceItems.add(dye); 
    } 
  }
  
  @EventHandler
  public void init(FMLInitializationEvent event) {
    proxy.init();
  }
  
  @EventHandler
  public void preInit(FMLPreInitializationEvent ev) {
    File oldConfigFile = ev.getSuggestedConfigurationFile();
    File configFile = new File(ev.getModConfigurationDirectory(), "decocraft.cfg");
    if (oldConfigFile.exists() && !oldConfigFile.isDirectory())
      oldConfigFile.renameTo(configFile); 
    config = new Configuration(configFile);
    try {
      config.load();
      clayDrops = config.getBoolean("clayDrops", "general", false, "");
      allowPropRecycling = config.getBoolean("allowPropRecycling", "general", true, "Allow old props to be turned back in to resources at the decobench?");
    } catch (Exception e) {
      FMLLog.severe("Decocraft has a problem loading it's configuration", new Object[0]);
      FMLLog.severe(e.getMessage(), new Object[0]);
      throw new RuntimeException(e);
    } finally {
      if (config.hasChanged())
        config.save(); 
    } 
    NetworkRegistry.INSTANCE.registerGuiHandler(this, (IGuiHandler)new GuiHandler());
    ForgeRegistries.BLOCKS.register((IForgeRegistryEntry)(blockProps = (Block)(new BlockProps()).setRegistryName("blockProps")));
    ForgeRegistries.BLOCKS.register((IForgeRegistryEntry)(blockFake = (Block)(new BlockFake()).setRegistryName("blockFake")));
    ForgeRegistries.ITEMS.register((IForgeRegistryEntry)(itemProps = (Item)(new ItemProps()).setRegistryName("props")));
    ForgeRegistries.ITEMS.register((IForgeRegistryEntry)(itemClay = (Item)(new ItemCratingClay()).setRegistryName("clay")));
    ForgeRegistries.ITEMS.register((IForgeRegistryEntry)(itemTool = (ItemDecowand)(new ItemDecowand()).setRegistryName("tool")));
    EntityRegistry.registerModEntity(new ResourceLocation("props", "chair"), EntityChairMount.class, "FakeChairEntity", 0, instance, 80, 3, true);
    TileTypeMap.register();
    File modelListOverride = new File(ev.getModConfigurationDirectory(), "decocraftModelList.json");
    try {
      InputStream overrideStream = modelListOverride.exists() ? new FileInputStream(modelListOverride) : null;
      loadModels(overrideStream);
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    } 
    proxy.preInit();
  }
  
  @EventHandler
  public void postInit(FMLPostInitializationEvent ev) {
    proxy.postInit();
  }
  
  private void validateModelMetadata(DecoModelMetadata metaData, CSModel model, ArrayList<Integer> variantsList) {
    if (modelData.containsKey(Integer.valueOf(metaData.decocraftModelID))) {
      DecoModelMetadata existingMeta = modelData.get(Integer.valueOf(metaData.decocraftModelID));
      if (!existingMeta.craftstudioAssetName.equals(metaData.craftstudioAssetName))
        throw new RuntimeException("You gave a new model the same DecoID as an existing model! Existing:[" + existingMeta.craftstudioAssetName + ":" + existingMeta.decocraftModelID + "], New:[" + metaData.craftstudioAssetName + ":" + existingMeta.decocraftModelID + "]"); 
      recipes.remove(existingMeta.recipe);
    } 
    variantsList.add(Integer.valueOf(metaData.decocraftModelID));
    metaData.csmodel = model;
    metaData.validate();
    modelData.put(Integer.valueOf(metaData.decocraftModelID), metaData);
    if (metaData.variants != null)
      for (Map.Entry<Integer, JsonObject> entry : metaData.variants.entrySet())
        validateModelMetadata(new DecoModelMetadata(metaData, ((Integer)entry.getKey()).intValue(), entry.getValue()), model, variantsList);  
  }
  
  public void loadModels(InputStream modelListOverride) {
    csproject = CSLibMod.getCSProjectAndLoad("Decopack", modelListOverride, new IPackReaderCallback() {
          private ProgressManager.ProgressBar progressBar = null;
          
          public void modelLoaded(CSModel model, JsonElement json) {
            if (json != null)
              try {
                this.progressBar.step(json.getAsJsonObject().get("name").getAsString());
              } catch (NullPointerException e) {
                Props.log.error("Critical error while parsing: " + json);
                throw e;
              }  
            if (this.progressBar.getStep() == this.progressBar.getSteps())
              ProgressManager.pop(this.progressBar); 
          }
          
          public void setCount(int count) {
            this.progressBar = ProgressManager.push("Loading models", count);
          }
        });
    Gson gson = (new GsonBuilder()).create();
    for (Map.Entry<Integer, CSModel> entry : (Iterable<Map.Entry<Integer, CSModel>>)csproject.getModels().entrySet()) {
      JsonElement modelDescriptor = csproject.getDescriptor(entry.getKey());
      if (modelDescriptor != null) {
        if ("item_decowand".equals(modelDescriptor.getAsJsonObject().get("craftstudioAssetName").getAsString().toLowerCase())) {
          itemTool.modelMeta = (ModelMetadata)gson.fromJson(modelDescriptor, ModelMetadata.class);
          itemTool.modelMeta.csmodel = entry.getValue();
          continue;
        } 
        ArrayList<Integer> variantsList = new ArrayList<>();
        validateModelMetadata((DecoModelMetadata)gson.fromJson(modelDescriptor, DecoModelMetadata.class), entry.getValue(), variantsList);
        if (variantsList.size() > 1) {
          this.modelDataVariantsList.put(variantsList.get(0), new MetaVariantListNode(variantsList.get(variantsList.size() - 1), variantsList.get(1), variantsList.get(0)));
          this.modelDataVariantsList.put(variantsList.get(variantsList.size() - 1), new MetaVariantListNode(variantsList.get(variantsList.size() - 2), variantsList.get(0), variantsList.get(0)));
          for (int i = 1, end = variantsList.size() - 1; i < end; i++)
            this.modelDataVariantsList.put(variantsList.get(i), new MetaVariantListNode(variantsList.get(i - 1), variantsList.get(i + 1), variantsList.get(0))); 
        } 
      } 
    } 
    if (itemTool.modelMeta == null) {
      Integer toolID = csproject.findFirstIDfromName("Item_DecoWand");
      if (toolID.intValue() >= 0) {
        itemTool.modelMeta = new ModelMetadata();
        itemTool.modelMeta.craftstudioAssetID = toolID.intValue();
        itemTool.modelMeta.craftstudioAssetName = "Item_DecoWand";
        itemTool.modelMeta.csmodel = csproject.getModel(toolID);
        itemTool.modelMeta.scale = 2.5F;
      } 
    } 
    proxy.setupModelWrappers();
  }
  
  public static TileEntity getTileEntityPreferNotCreating(IBlockAccess blockAccess, BlockPos pos) {
    if (blockAccess instanceof World)
      return getTileEntityWithoutCreating((World)blockAccess, pos); 
    if (blockAccess instanceof ChunkCache)
      return getTileEntityWithoutCreating(((ChunkCache)blockAccess).field_72815_e, pos); 
    return blockAccess.func_175625_s(pos);
  }
  
  public static TileEntity getTileEntityWithoutCreating(World world, BlockPos pos) {
    if (world.func_175668_a(pos, false))
      return getTileEntityUnsafe(pos, world.func_175726_f(pos).func_177434_r()); 
    return null;
  }
  
  private static TileEntity getTileEntityUnsafe(BlockPos pos, Map<BlockPos, TileEntity> tileMap) {
    TileEntity tileentity = tileMap.get(pos);
    if (tileentity != null && tileentity.func_145837_r()) {
      tileMap.remove(pos);
      tileentity = null;
    } 
    return tileentity;
  }
}
package com.mia.props;

import com.mia.props.common.TileTypeMap;
import net.minecraft.nbt.NBTTagCompound;
import net.minecraft.util.datafix.IFixableData;

public class FixTileEntityID implements IFixableData {
  public int func_188216_a() {
    return TileTypeMap.tileEntityMapVersion;
  }
  
  public NBTTagCompound func_188217_a(NBTTagCompound compound) {
    if (compound == null)
      return compound; 
    String id = compound.func_74779_i("id").toLowerCase();
    String match = (String)TileTypeMap.lookupTable.get(id);
    if (match != null)
      compound.func_74778_a("id", match); 
    return compound;
  }
}
package com.mia.props;

import net.minecraft.creativetab.CreativeTabs;
import net.minecraft.item.ItemStack;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;

public enum TabProps {
  Main(508),
  Art(328),
  Bathroom(320),
  Bedroom(309),
  Misc(1117),
  Dungeon(493),
  Architecture(332),
  Food(275),
  Holiday(147),
  Kitchen(453),
  Lighting(244),
  Livingroom(466),
  Market(809),
  Office(329),
  Patreon(443),
  Plants(1659),
  Religion(470),
  Science(187),
  Signs(189),
  Sports(461),
  Storage(317),
  Tech(474),
  Toys(278),
  Trophies(518),
  Yard(75);
  
  private PropTab tab;
  
  class PropTab extends CreativeTabs {
    private int meta;
    
    private ItemStack icon;
    
    public PropTab(int meta) {
      super("props." + TabProps.this.name());
      this.meta = meta;
    }
    
    public ItemStack func_78016_d() {
      return new ItemStack(Props.itemProps, 1);
    }
    
    @SideOnly(Side.CLIENT)
    public ItemStack func_151244_d() {
      if (this.icon == null)
        this.icon = new ItemStack(Props.itemProps, 1, this.meta); 
      return this.icon;
    }
  }
  
  TabProps(int meta) {
    this.tab = new PropTab(meta);
  }
  
  public PropTab get() {
    return this.tab;
  }
  
  public static CreativeTabs[] getAll() {
    CreativeTabs[] tabs = new CreativeTabs[(values()).length + 1];
    tabs[0] = CreativeTabs.field_78027_g;
    for (int i = 0; i < (values()).length; i++)
      tabs[i + 1] = values()[i].get(); 
    return tabs;
  }
}
package com.mia.props;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSyntaxException;
import com.mia.craftstudio.CSModel;
import com.mia.craftstudio.libgdx.Vector3;
import com.mia.craftstudio.minecraft.ModelMetadata;
import com.mia.props.common.ColorsUtil;
import com.mia.props.common.TileTypeMap;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import net.minecraft.util.math.AxisAlignedBB;

public class DecoModelMetadata extends ModelMetadata {
  public String name;
  
  public int decocraftModelID;
  
  public int lightLevel = 0;
  
  public int invX = 0;
  
  public int invY = 0;
  
  public boolean walkthrough = false;
  
  public boolean colorable = false;
  
  public boolean limitRotation = false;
  
  public boolean hasVariableRendering = false;
  
  public boolean spiderweb = false;
  
  public boolean hideDecobench = false;
  
  public TabProps tab = TabProps.Main;
  
  public TileTypeMap tileType = TileTypeMap.Props;
  
  public String sound;
  
  public String recipe;
  
  public boolean showOutline = true;
  
  public boolean creativeInv = true;
  
  public int rotInventory = 8;
  
  public int rotHeld = 8;
  
  public String colorPrimary;
  
  public String colorSecondary;
  
  public String colorAccentPrimary;
  
  public String colorAccentSecondary;
  
  public Map<Integer, JsonObject> variants = null;
  
  public transient int[] resourceCost = new int[4];
  
  public transient float itemScale = -1.0F;
  
  public transient Vector3 itemOffset;
  
  private transient Map<Integer, AxisAlignedBB> aabbs = new HashMap<>();
  
  private static final HashMap<String, Field> fieldMap = new HashMap<>();
  
  public DecoModelMetadata() {
    if (fieldMap.isEmpty())
      for (Field f : DecoModelMetadata.class.getFields())
        fieldMap.put(f.getName(), f);  
  }
  
  public DecoModelMetadata(DecoModelMetadata existingMeta, int newID, JsonObject changes) {
    if (fieldMap.isEmpty())
      for (Field f : DecoModelMetadata.class.getFields())
        fieldMap.put(f.getName(), f);  
    this.craftstudioAssetName = existingMeta.craftstudioAssetName;
    this.craftstudioAssetID = existingMeta.craftstudioAssetID;
    this.scale = existingMeta.scale;
    this.textureOverride = null;
    this.tileParams = new HashMap<>(existingMeta.tileParams);
    this.csmodel = existingMeta.csmodel;
    this.name = existingMeta.name;
    this.decocraftModelID = newID;
    this.lightLevel = existingMeta.lightLevel;
    this.invX = existingMeta.invX;
    this.invY = existingMeta.invY;
    this.walkthrough = existingMeta.walkthrough;
    this.colorable = existingMeta.colorable;
    this.limitRotation = existingMeta.limitRotation;
    this.hasVariableRendering = existingMeta.hasVariableRendering;
    this.spiderweb = existingMeta.spiderweb;
    this.tab = existingMeta.tab;
    this.tileType = existingMeta.tileType;
    this.sound = existingMeta.sound;
    this.recipe = null;
    this.variants = null;
    this.colorPrimary = existingMeta.colorPrimary;
    this.colorSecondary = existingMeta.colorSecondary;
    this.colorAccentPrimary = existingMeta.colorAccentPrimary;
    this.colorAccentSecondary = existingMeta.colorAccentSecondary;
    this.resourceCost = Arrays.copyOf(existingMeta.resourceCost, 4);
    this.itemScale = existingMeta.itemScale;
    this.itemOffset = (existingMeta.itemOffset != null) ? new Vector3(existingMeta.itemOffset) : null;
    this.showOutline = existingMeta.showOutline;
    this.creativeInv = existingMeta.creativeInv;
    this.rotInventory = existingMeta.rotInventory;
    this.rotHeld = existingMeta.rotHeld;
    this.faceCulling = existingMeta.faceCulling;
    if (changes != null) {
      Gson gson = (new GsonBuilder()).create();
      for (Map.Entry<String, JsonElement> entry : (Iterable<Map.Entry<String, JsonElement>>)changes.entrySet()) {
        Field foundField = fieldMap.get(((String)entry.getKey()).intern());
        if (foundField != null)
          try {
            foundField.set(this, gson.fromJson(entry.getValue(), foundField.getGenericType()));
          } catch (JsonSyntaxException jsonSyntaxException) {
          
          } catch (IllegalArgumentException illegalArgumentException) {
          
          } catch (IllegalAccessException illegalAccessException) {} 
      } 
    } 
  }
  
  public void wrapperCallback() {
    super.wrapperCallback();
    int[] extendBlock = this.wrapper.getExtendBlock(0);
    int width = 1 + extendBlock[3] - extendBlock[0];
    int depth = 1 + extendBlock[5] - extendBlock[2];
    int height = extendBlock[4] - extendBlock[1];
    if (height == 0)
      height++; 
    if (this.colorPrimary != null)
      this.wrapper.colorPrimary = ColorsUtil.parseColor(this.colorPrimary); 
    if (this.colorSecondary != null)
      this.wrapper.colorSecondary = ColorsUtil.parseColor(this.colorSecondary); 
    if (this.colorAccentPrimary != null)
      this.wrapper.colorAccentPrimary = ColorsUtil.parseColor(this.colorAccentPrimary); 
    if (this.colorAccentSecondary != null)
      this.wrapper.colorAccentSecondary = ColorsUtil.parseColor(this.colorAccentSecondary); 
    this.resourceCost[0] = 3 * width * depth * height;
    int[] pixels = this.csmodel.getTexture().getRGB(0, 0, this.csmodel.getTexture().getWidth(), this.csmodel.getTexture().getHeight(), null, 0, this.csmodel.getTexture().getWidth());
    long[] total = new long[4];
    for (int pixel : pixels) {
      if ((pixel >> 24 & 0xFF) != 0) {
        int r = pixel >> 16 & 0xFF;
        int g = pixel >> 8 & 0xFF;
        int b = pixel & 0xFF;
        total[0] = total[0] + (r + g + b);
        total[1] = total[1] + r;
        total[2] = total[2] + g;
        total[3] = total[3] + b;
      } 
    } 
    float[] colorRatios = new float[3];
    int i;
    for (i = 1; i < 4; i++)
      colorRatios[i - 1] = (float)total[i] / (float)total[0]; 
    if (this.wrapper.colorPrimary != null) {
      colorRatios[0] = colorRatios[0] * (1.0F + this.wrapper.colorPrimary.getRed() / 255.0F);
      colorRatios[1] = colorRatios[1] * (1.0F + this.wrapper.colorPrimary.getGreen() / 255.0F);
      colorRatios[2] = colorRatios[2] * (1.0F + this.wrapper.colorPrimary.getBlue() / 255.0F);
      float divisor = colorRatios[0] + colorRatios[1] + colorRatios[2];
      colorRatios[0] = colorRatios[0] / divisor;
      colorRatios[1] = colorRatios[1] / divisor;
      colorRatios[2] = colorRatios[2] / divisor;
    } 
    for (i = 1; i < 4; i++)
      this.resourceCost[i] = Math.round(this.resourceCost[0] * colorRatios[i - 1]); 
    Vector3[] extend = this.wrapper.getExtend(8);
    this.itemScale = Math.min(1.0F / Math.abs((extend[1]).y - (extend[0]).y), Math.min(1.0F / Math.abs((extend[1]).x - (extend[0]).x), 1.0F / Math.abs((extend[1]).z - (extend[0]).z)));
    this.itemOffset = new Vector3(-(((extend[0]).x + (extend[1]).x) / 2.0F), -(((extend[0]).y + (extend[1]).y) / 35.0F + (((extend[0]).y < 0.0F) ? ((extend[0]).y / 2.0F) : 0.0F) + (((extend[0]).y > 0.0F) ? (extend[0]).y : 0.0F) + (((extend[1]).y > 0.5F) ? ((extend[1]).y / 35.0F) : 0.0F) + 0.84F), -(((extend[0]).z + (extend[1]).z) / 2.2F));
  }
  
  public void validate() {
    if (this.textureOverride == null)
      this.textureOverride = getDefaultTextureName(); 
    if (this.csmodel.getRootNode() != null && this.csmodel.getRootNode().hasAttribute(CSModel.ModelNode.Attrb.PASSABLEPROPAGATES))
      this.walkthrough = true; 
  }
  
  public String getDefaultTextureName() {
    return String.format("%04d_%s.png", new Object[] { Integer.valueOf(this.decocraftModelID), this.name.toLowerCase().replaceAll("[/\\\\:*?\"<>|' ]", "_") });
  }
  
  public boolean isCraftable(int[] availableResources) {
    return (availableResources[0] >= this.resourceCost[0] && availableResources[1] >= this.resourceCost[1] && availableResources[2] >= this.resourceCost[2] && availableResources[3] >= this.resourceCost[3]);
  }
  
  public int compareTo(ModelMetadata o) {
    if (o instanceof DecoModelMetadata) {
      if (this.decocraftModelID < ((DecoModelMetadata)o).decocraftModelID)
        return -1; 
      if (this.decocraftModelID > ((DecoModelMetadata)o).decocraftModelID)
        return 1; 
      return 0;
    } 
    return super.compareTo(o);
  }
  
  public AxisAlignedBB getBoundingBox(int rotation) {
    AxisAlignedBB aabb = this.aabbs.get(Integer.valueOf(rotation));
    if (aabb == null) {
      Vector3[] extend = this.wrapper.getExtend(rotation);
      aabb = new AxisAlignedBB((extend[0]).x, (extend[0]).y, (extend[0]).z, (extend[1]).x, (extend[1]).y, (extend[1]).z);
      this.aabbs.put(Integer.valueOf(rotation), aabb);
      return aabb;
    } 
    return aabb;
  }
}
package com.mia.props.common;

import com.google.common.base.Predicate;
import com.mia.props.Props;
import java.util.List;
import javax.annotation.Nullable;
import net.minecraft.block.Block;
import net.minecraft.block.BlockContainer;
import net.minecraft.block.ITileEntityProvider;
import net.minecraft.block.material.Material;
import net.minecraft.block.properties.IProperty;
import net.minecraft.block.properties.PropertyDirection;
import net.minecraft.block.state.BlockFaceShape;
import net.minecraft.block.state.BlockStateContainer;
import net.minecraft.block.state.IBlockState;
import net.minecraft.entity.Entity;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.EnumBlockRenderType;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.math.AxisAlignedBB;
import net.minecraft.util.math.BlockPos;
import net.minecraft.util.math.RayTraceResult;
import net.minecraft.util.math.Vec3d;
import net.minecraft.world.IBlockAccess;
import net.minecraft.world.World;

public class BlockFake extends BlockContainer implements ITileEntityProvider {
  public static final PropertyDirection FACING = PropertyDirection.func_177712_a("facing", (Predicate)EnumFacing.Plane.HORIZONTAL);
  
  public BlockFake() {
    super(Material.field_151580_n);
    func_149711_c(0.25F);
    func_180632_j(this.field_176227_L.func_177621_b().func_177226_a((IProperty)FACING, (Comparable)EnumFacing.NORTH));
  }
  
  protected BlockStateContainer func_180661_e() {
    return new BlockStateContainer((Block)this, new IProperty[] { (IProperty)FACING });
  }
  
  public boolean func_149662_c(IBlockState state) {
    return false;
  }
  
  public boolean func_149686_d(IBlockState state) {
    return false;
  }
  
  public EnumBlockRenderType func_149645_b(IBlockState state) {
    return EnumBlockRenderType.INVISIBLE;
  }
  
  public TileEntity func_149915_a(World world, int meta) {
    return new TileFake();
  }
  
  public int func_176201_c(IBlockState state) {
    return ((EnumFacing)state.func_177229_b((IProperty)FACING)).func_176736_b();
  }
  
  public IBlockState func_176203_a(int meta) {
    return func_176223_P().func_177226_a((IProperty)FACING, (Comparable)EnumFacing.func_176731_b(meta));
  }
  
  public RayTraceResult func_180636_a(IBlockState blockState, World world, BlockPos pos, Vec3d origin, Vec3d direction) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileFake) {
      TileProps master = ((TileFake)tile).getMaster();
      if (master != null)
        return Props.blockProps.func_180636_a(blockState, world, master.func_174877_v(), origin, direction); 
    } 
    return super.func_180636_a(blockState, world, pos, origin, direction);
  }
  
  public void func_185477_a(IBlockState state, World world, BlockPos pos, AxisAlignedBB entityBox, List<AxisAlignedBB> collidingBoxes, @Nullable Entity entityIn, boolean p_185477_7_) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileFake) {
      TileProps master = ((TileFake)tile).getMaster();
      if (master != null) {
        BlockPos masterPos = master.func_174877_v();
        Props.blockProps.func_185477_a(world.func_180495_p(masterPos), world, masterPos, entityBox, collidingBoxes, entityIn, p_185477_7_);
      } 
    } else {
      super.func_185477_a(state, world, pos, entityBox, collidingBoxes, entityIn, p_185477_7_);
    } 
  }
  
  public AxisAlignedBB func_180646_a(IBlockState blockState, IBlockAccess worldIn, BlockPos pos) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(worldIn, pos);
    if (tile instanceof TileFake) {
      TileProps master = ((TileFake)tile).getMaster();
      if (master != null) {
        BlockPos masterPos = master.func_174877_v();
        return Props.blockProps.func_180646_a(worldIn.func_180495_p(masterPos), worldIn, masterPos);
      } 
    } 
    return super.func_180646_a(blockState, worldIn, pos);
  }
  
  public void func_180634_a(World world, BlockPos pos, IBlockState state, Entity collidingEntity) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileFake) {
      TileProps master = ((TileFake)tile).getMaster();
      if (master != null && (master.getModelData()).spiderweb)
        BlockProps.onEntityWebbed(collidingEntity, world); 
    } 
  }
  
  public boolean canBeConnectedTo(IBlockAccess world, BlockPos pos, EnumFacing facing) {
    return false;
  }
  
  public BlockFaceShape func_193383_a(IBlockAccess p_193383_1_, IBlockState p_193383_2_, BlockPos p_193383_3_, EnumFacing p_193383_4_) {
    return BlockFaceShape.UNDEFINED;
  }
}
package com.mia.props.common;

import com.google.common.base.Predicate;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.mia.craftstudio.CSModel;
import com.mia.craftstudio.libgdx.Vector3;
import com.mia.props.DecoModelMetadata;
import com.mia.props.Props;
import com.mia.props.events.SoundRegistry;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;
import javax.annotation.Nullable;
import net.minecraft.block.Block;
import net.minecraft.block.BlockContainer;
import net.minecraft.block.ITileEntityProvider;
import net.minecraft.block.material.Material;
import net.minecraft.block.properties.IProperty;
import net.minecraft.block.properties.PropertyDirection;
import net.minecraft.block.state.BlockFaceShape;
import net.minecraft.block.state.BlockStateContainer;
import net.minecraft.block.state.IBlockState;
import net.minecraft.entity.Entity;
import net.minecraft.entity.monster.EntitySpider;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.nbt.NBTBase;
import net.minecraft.nbt.NBTTagCompound;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.EnumBlockRenderType;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.EnumHand;
import net.minecraft.util.SoundCategory;
import net.minecraft.util.math.AxisAlignedBB;
import net.minecraft.util.math.BlockPos;
import net.minecraft.util.math.RayTraceResult;
import net.minecraft.util.math.Vec3d;
import net.minecraft.world.IBlockAccess;
import net.minecraft.world.World;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;

public class BlockProps extends BlockContainer implements ITileEntityProvider {
  public static final PropertyDirection FACING = PropertyDirection.func_177712_a("facing", (Predicate)EnumFacing.Plane.HORIZONTAL);
  
  public BlockProps() {
    super(Material.field_151580_n);
    func_149711_c(0.25F);
    func_180632_j(this.field_176227_L.func_177621_b().func_177226_a((IProperty)FACING, (Comparable)EnumFacing.NORTH));
  }
  
  protected BlockStateContainer func_180661_e() {
    return new BlockStateContainer((Block)this, new IProperty[] { (IProperty)FACING });
  }
  
  public int func_176201_c(IBlockState state) {
    return ((EnumFacing)state.func_177229_b((IProperty)FACING)).func_176736_b();
  }
  
  public IBlockState func_176203_a(int meta) {
    return func_176223_P().func_177226_a((IProperty)FACING, (Comparable)EnumFacing.func_176731_b(meta));
  }
  
  public ItemStack getPickBlock(IBlockState state, RayTraceResult target, World world, BlockPos pos, EntityPlayer player) {
    ItemStack stack = null;
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileProps) {
      Item item = Props.itemProps;
      stack = (item == null) ? null : new ItemStack(item, 1, ((TileProps)tile).type);
      if (player.func_70093_af() && (
        (TileProps)tile).onItemStackDropSaveNBT()) {
        NBTTagCompound tag = tile.func_189515_b(new NBTTagCompound());
        tag.func_82580_o("slaves");
        stack.func_77983_a("savedProp", (NBTBase)tag);
      } 
    } 
    return stack;
  }
  
  public void func_185477_a(IBlockState state, World world, BlockPos pos, AxisAlignedBB entityBox, List<AxisAlignedBB> collidingBoxes, @Nullable Entity entityIn, boolean p_185477_7_) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileProps) {
      DecoModelMetadata data = (DecoModelMetadata)Props.modelData.get(Integer.valueOf(((TileProps)tile).type));
      if (data.walkthrough)
        return; 
      CSModel model = data.csmodel;
      for (CSModel.ModelNode node : model.getNodes()) {
        if (!node.hasAttribute(CSModel.ModelNode.Attrb.PASSABLE) && !node.hasAttribute(CSModel.ModelNode.Attrb.PASSABLEPROPAGATES)) {
          Vector3[] extend = data.wrapper.nodeCache.get(node).getExtend(((TileProps)tile).rotation);
          AxisAlignedBB aabb = new AxisAlignedBB((extend[0]).x, (extend[0]).y, (extend[0]).z, (extend[1]).x, (extend[1]).y, (extend[1]).z);
          AxisAlignedBB aabbTmp = aabb.func_72317_d(pos.func_177958_n(), pos.func_177956_o(), pos.func_177952_p());
          if (entityBox.func_72326_a(aabbTmp))
            collidingBoxes.add(aabbTmp); 
        } 
      } 
    } else {
      super.func_185477_a(state, world, pos, entityBox, collidingBoxes, entityIn, p_185477_7_);
    } 
  }
  
  public AxisAlignedBB func_185496_a(IBlockState state, IBlockAccess source, BlockPos pos) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(source, pos);
    if (tile instanceof TileProps) {
      TileProps tileProps = (TileProps)tile;
      return ((DecoModelMetadata)Props.modelData.get(Integer.valueOf(tileProps.type))).getBoundingBox(tileProps.rotation);
    } 
    return field_185505_j;
  }
  
  public AxisAlignedBB func_180646_a(IBlockState blockState, IBlockAccess worldIn, BlockPos pos) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(worldIn, pos);
    if (tile instanceof TileProps) {
      DecoModelMetadata data = (DecoModelMetadata)Props.modelData.get(Integer.valueOf(((TileProps)tile).type));
      if (data.walkthrough)
        return null; 
      CSModel model = data.csmodel;
      AxisAlignedBB ret = new AxisAlignedBB(0.0D, 0.0D, 0.0D, 0.0D, 0.0D, 0.0D);
      for (CSModel.ModelNode node : model.getNodes()) {
        if (!node.hasAttribute(CSModel.ModelNode.Attrb.PASSABLE) && !node.hasAttribute(CSModel.ModelNode.Attrb.PASSABLEPROPAGATES)) {
          Vector3[] extend = data.wrapper.nodeCache.get(node).getExtend(((TileProps)tile).rotation);
          AxisAlignedBB aabb = new AxisAlignedBB((extend[0]).x, (extend[0]).y, (extend[0]).z, (extend[1]).x, (extend[1]).y, (extend[1]).z);
          AxisAlignedBB aabbTmp = aabb.func_72317_d(pos.func_177958_n(), pos.func_177956_o(), pos.func_177952_p());
          ret.func_111270_a(aabbTmp);
        } 
      } 
      return ret;
    } 
    return super.func_180646_a(blockState, worldIn, pos);
  }
  
  public RayTraceResult func_180636_a(IBlockState state, World world, BlockPos pos, Vec3d origin, Vec3d direction) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileProps) {
      DecoModelMetadata data = (DecoModelMetadata)Props.modelData.get(Integer.valueOf(((TileProps)tile).type));
      RayTraceResult closest = null;
      CSModel model = data.csmodel;
      for (CSModel.ModelNode node : model.getNodes()) {
        Vector3[] extend = data.wrapper.nodeCache.get(node).getExtend(((TileProps)tile).rotation);
        AxisAlignedBB aabb = new AxisAlignedBB((extend[0]).x, (extend[0]).y, (extend[0]).z, (extend[1]).x, (extend[1]).y, (extend[1]).z);
        RayTraceResult mop = aabb.func_72317_d(pos.func_177958_n(), pos.func_177956_o(), pos.func_177952_p()).func_72327_a(origin, direction);
        if (mop != null) {
          if (closest != null && mop.field_72307_f.func_72438_d(origin) < closest.field_72307_f.func_72438_d(origin)) {
            closest = mop;
            continue;
          } 
          closest = mop;
        } 
      } 
      if (closest != null)
        closest = new RayTraceResult(closest.field_72307_f, closest.field_178784_b, pos); 
      return closest;
    } 
    return super.func_180636_a(state, world, pos, origin, direction);
  }
  
  public boolean func_149662_c(IBlockState state) {
    return false;
  }
  
  public boolean func_149686_d(IBlockState state) {
    return false;
  }
  
  public EnumBlockRenderType func_149645_b(IBlockState state) {
    return EnumBlockRenderType.INVISIBLE;
  }
  
  public TileEntity func_149915_a(World world, int meta) {
    try {
      return ((DecoModelMetadata)Props.modelData.get(Integer.valueOf(meta))).tileType.getTileClass().newInstance();
    } catch (InstantiationException e) {
      e.printStackTrace();
    } catch (IllegalAccessException e) {
      e.printStackTrace();
    } catch (Exception e) {
      System.out.printf("!!! CRITICAL ERROR : PRB WHILE LOADING TE FOR META %s !!!\n", new Object[] { Integer.valueOf(meta) });
      throw new RuntimeException(e);
    } 
    return new TileProps();
  }
  
  public ArrayList<ItemStack> getDrops(IBlockAccess world, BlockPos pos, IBlockState state, int fortune) {
    ArrayList<ItemStack> ret = new ArrayList<>();
    return ret;
  }
  
  public int getLightValue(IBlockState state, IBlockAccess world, BlockPos pos) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(world, pos);
    if (tile instanceof TileProps)
      return ((TileProps)tile).getLightValue(world, pos); 
    return 0;
  }
  
  public void func_180663_b(World world, BlockPos pos, IBlockState state) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileProps)
      ((TileProps)tile).breakBlock(world, pos, state); 
  }
  
  public void func_180657_a(World world, EntityPlayer player, BlockPos pos, IBlockState state, @Nullable TileEntity tile, ItemStack stack) {
    if (tile instanceof TileProps)
      ((TileProps)tile).harvestBlock(world, player, pos, state, stack); 
  }
  
  public void func_180649_a(World world, BlockPos pos, EntityPlayer player) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (tile instanceof TileProps)
      ((TileProps)tile).onBlockClicked(world, pos, player); 
  }
  
  private void playBlockSound(World world, TileProps prop, Entity player) {
    if (world.field_72995_K)
      return; 
    if (prop != null) {
      String sfx = ((DecoModelMetadata)Props.modelData.get(Integer.valueOf(prop.type))).sound;
      if (sfx != null)
        world.func_184133_a((EntityPlayer)null, prop.func_174877_v(), SoundRegistry.get(sfx), SoundCategory.AMBIENT, 1.0F, 1.0F); 
    } 
  }
  
  public boolean func_180639_a(World worldIn, BlockPos pos, IBlockState state, EntityPlayer playerIn, EnumHand hand, EnumFacing facing, float hitX, float hitY, float hitZ) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)worldIn, pos);
    if (tile instanceof TileProps) {
      playBlockSound(worldIn, (TileProps)tile, (Entity)playerIn);
      return ((TileProps)tile).onBlockActivated(worldIn, pos, state, playerIn, hand, facing, hitX, hitY, hitZ);
    } 
    return false;
  }
  
  @SideOnly(Side.CLIENT)
  public void func_180655_c(IBlockState stateIn, World worldIn, BlockPos pos, Random rand) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)worldIn, pos);
    if (tile instanceof TileProps)
      ((TileProps)tile).renderParticles(worldIn, pos, stateIn, rand); 
  }
  
  public boolean isBed(IBlockState state, IBlockAccess world, BlockPos pos, Entity player) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(world, pos);
    if (tile instanceof TileProps)
      return ((TileProps)tile).isBed(); 
    return false;
  }
  
  public boolean isBedFoot(IBlockAccess world, BlockPos pos) {
    return super.isBedFoot(world, pos);
  }
  
  public void setBedOccupied(IBlockAccess world, BlockPos pos, EntityPlayer player, boolean occupied) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(world, pos);
    if (tile instanceof TileProps)
      ((TileProps)tile).setBedOccupied(world, pos, player, occupied); 
  }
  
  public BlockPos getBedSpawnPosition(IBlockState state, IBlockAccess world, BlockPos pos, EntityPlayer player) {
    TileEntity tile = Props.getTileEntityPreferNotCreating(world, pos);
    if (tile instanceof TileProps)
      return ((TileProps)tile).getBedSpawnPosition(world, pos, player); 
    return pos;
  }
  
  public boolean removedByPlayer(IBlockState state, World world, BlockPos pos, EntityPlayer player, boolean willHarvest) {
    TileEntity master = Props.getTileEntityPreferNotCreating((IBlockAccess)world, pos);
    if (master instanceof TileProps)
      ((TileProps)master).removeSlaves(); 
    func_176208_a(world, pos, state, player);
    world.func_175698_g(pos);
    return true;
  }
  
  private static class TimedBool {
    public boolean value;
    
    public long time;
    
    public TimedBool(boolean v, long t) {
      this.value = v;
      this.time = t;
    }
  }
  
  private static final Cache<Object, TimedBool> eggedEntities = CacheBuilder.newBuilder().weakKeys().expireAfterAccess(2500L, TimeUnit.MILLISECONDS).build();
  
  private static void eggCacheAndSpawnEntity(Entity newSpawn, World world, double x, double y, double z) {
    newSpawn.func_70012_b(x + ((world.field_73012_v.nextFloat() - 0.5F) / 4.0F), y + ((world.field_73012_v.nextFloat() - 0.5F) / 4.0F), z + ((world.field_73012_v.nextFloat() - 0.5F) / 4.0F), world.field_73012_v.nextFloat() * 360.0F, 0.0F);
    newSpawn.func_70110_aj();
    world.func_72838_d(newSpawn);
    eggedEntities.put(newSpawn, new TimedBool(false, System.currentTimeMillis()));
  }
  
  static void onEntityWebbed(Entity webbedEntity, World world) {
    webbedEntity.func_70110_aj();
    if (world.field_72995_K || webbedEntity.field_70128_L)
      return; 
    TimedBool egged = (TimedBool)eggedEntities.getIfPresent(webbedEntity);
    if (egged == null || (!egged.value && egged.time + 500L <= System.currentTimeMillis())) {
      if (egged == null)
        egged = new TimedBool(true, System.currentTimeMillis()); 
      egged.value = true;
      eggedEntities.put(webbedEntity, egged);
      if (webbedEntity instanceof EntitySpider) {
        if (world.field_73012_v.nextFloat() <= 0.3D) {
          Constructor[] ctors = (Constructor[])webbedEntity.getClass().getDeclaredConstructors();
          Constructor<Entity> ctor = null;
          for (int i = 0; i < ctors.length; i++) {
            if ((ctors[i].getParameterTypes()).length == 1 && ctors[i].getParameterTypes()[0].isAssignableFrom(World.class)) {
              ctor = ctors[i];
              break;
            } 
          } 
          if (ctor != null)
            try {
              eggCacheAndSpawnEntity(ctor.newInstance(new Object[] { world }, ), world, webbedEntity.field_70165_t, webbedEntity.field_70163_u, webbedEntity.field_70161_v);
            } catch (InstantiationException instantiationException) {
            
            } catch (IllegalAccessException illegalAccessException) {
            
            } catch (IllegalArgumentException illegalArgumentException) {
            
            } catch (InvocationTargetException invocationTargetException) {} 
        } 
      } else if (webbedEntity instanceof EntityPlayer && 
        world.field_73012_v.nextFloat() <= 0.5D) {
        eggCacheAndSpawnEntity((Entity)new EntitySpider(world), world, webbedEntity.field_70165_t, webbedEntity.field_70163_u, webbedEntity.field_70161_v);
      } 
    } 
  }
  
  public void func_180634_a(World worldIn, BlockPos pos, IBlockState state, Entity entityIn) {
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)worldIn, pos);
    if (tile instanceof TileProps && 
      (((TileProps)tile).getModelData()).spiderweb)
      onEntityWebbed(entityIn, worldIn); 
  }
  
  public void func_189540_a(IBlockState state, World worldIn, BlockPos pos, Block blockIn, BlockPos fromPos) {
    super.func_189540_a(state, worldIn, pos, blockIn, fromPos);
    TileEntity tile = Props.getTileEntityPreferNotCreating((IBlockAccess)worldIn, pos);
    if (tile instanceof TileProps)
      ((TileProps)tile).neighborChanged(state, worldIn, pos, blockIn, fromPos); 
  }
  
  public boolean canBeConnectedTo(IBlockAccess world, BlockPos pos, EnumFacing facing) {
    return false;
  }
  
  public BlockFaceShape func_193383_a(IBlockAccess p_193383_1_, IBlockState p_193383_2_, BlockPos p_193383_3_, EnumFacing p_193383_4_) {
    return BlockFaceShape.UNDEFINED;
  }
}
package com.mia.props.common;

import java.awt.Color;
import java.util.Locale;

public class ColorsUtil {
  public enum NamedColors {
    aliceblue(15792383),
    antiquewhite(16444375),
    aqua(65535),
    aquamarine(8388564),
    azure(15794175),
    beige(16119260),
    bisque(16770244),
    black(0),
    blanchedalmond(16772045),
    blue(255),
    blueviolet(9055202),
    brown(10824234),
    burlywood(14596231),
    cadetblue(6266528),
    chartreuse(8388352),
    chocolate(13789470),
    coral(16744272),
    cornflowerblue(6591981),
    cornsilk(16775388),
    crimson(14423100),
    cyan(65535),
    darkblue(139),
    darkcyan(35723),
    darkgoldenrod(12092939),
    darkgray(11119017),
    darkgreen(25600),
    darkkhaki(12433259),
    darkmagenta(9109643),
    darkolivegreen(5597999),
    darkorange(16747520),
    darkorchid(10040012),
    darkred(9109504),
    darksalmon(15308410),
    darkseagreen(9419919),
    darkslateblue(4734347),
    darkslategray(3100495),
    darkturquoise(52945),
    darkviolet(9699539),
    deeppink(16716947),
    deepskyblue(49151),
    dimgray(6908265),
    dodgerblue(2003199),
    firebrick(11674146),
    floralwhite(16775920),
    forestgreen(2263842),
    fuchsia(16711935),
    gainsboro(14474460),
    ghostwhite(16316671),
    gold(16766720),
    goldenrod(14329120),
    gray(8421504),
    green(32768),
    greenyellow(11403055),
    honeydew(15794160),
    hotpink(16738740),
    indianred(13458524),
    indigo(4915330),
    ivory(16777200),
    khaki(15787660),
    lavender(15132410),
    lavenderblush(16773365),
    lawngreen(8190976),
    lemonchiffon(16775885),
    lightblue(11393254),
    lightcoral(15761536),
    lightcyan(14745599),
    lightgoldenrodyellow(16448210),
    lightgray(13882323),
    lightgreen(9498256),
    lightpink(16758465),
    lightsalmon(16752762),
    lightseagreen(2142890),
    lightskyblue(8900346),
    lightslategray(7833753),
    lightsteelblue(11584734),
    lightyellow(16777184),
    lime(65280),
    limegreen(3329330),
    linen(16445670),
    magenta(16711935),
    maroon(8388608),
    mediumaquamarine(6737322),
    mediumblue(205),
    mediumorchid(12211667),
    mediumpurple(9662683),
    mediumseagreen(3978097),
    mediumslateblue(8087790),
    mediumspringgreen(64154),
    mediumturquoise(4772300),
    mediumvioletred(13047173),
    midnightblue(1644912),
    mintcream(16121850),
    mistyrose(16770273),
    moccasin(16770229),
    navajowhite(16768685),
    navy(128),
    oldlace(16643558),
    olive(8421376),
    olivedrab(7048739),
    orange(16753920),
    orangered(16729344),
    orchid(14315734),
    palegoldenrod(15657130),
    palegreen(10025880),
    paleturquoise(11529966),
    palevioletred(14381203),
    papayawhip(16773077),
    peachpuff(16767673),
    peru(13468991),
    pink(16761035),
    plum(14524637),
    powderblue(11591910),
    purple(8388736),
    rebeccapurple(6697881),
    red(16711680),
    rosybrown(12357519),
    royalblue(4286945),
    saddlebrown(9127187),
    salmon(16416882),
    sandybrown(16032864),
    seagreen(3050327),
    seashell(16774638),
    sienna(10506797),
    silver(12632256),
    skyblue(8900331),
    slateblue(6970061),
    slategray(7372944),
    snow(16775930),
    springgreen(65407),
    steelblue(4620980),
    tan(13808780),
    teal(32896),
    thistle(14204888),
    tomato(16737095),
    turquoise(4251856),
    violet(15631086),
    wheat(16113331),
    white(16777215),
    whitesmoke(16119285),
    yellow(16776960),
    yellowgreen(10145074),
    mc_stone(8224125),
    mc_granite(10056034),
    mc_polished_granite(10449506),
    mc_diorite(11776950),
    mc_polished_diorite(12040121),
    mc_andesite(8553347),
    mc_polished_andesite(8750470),
    mc_grass_block(4278044),
    mc_coarse_dirt(7820603),
    mc_podzol(8017721),
    mc_cobblestone(8026746),
    mc_oak_wood_planks(10256206),
    mc_spruce_wood_planks(6769966),
    mc_birch_wood_planks(12825467),
    mc_jungle_wood_planks(10120781),
    mc_acacia_wood_planks(11098931),
    mc_dark_oak_wood_planks(4007698),
    mc_oak_sapling(4679205),
    mc_spruce_sapling(3357217),
    mc_birch_sapling(7771732),
    mc_jungle_sapling(3167762),
    mc_acacia_sapling(7500564),
    mc_dark_oak_sapling(3692060),
    mc_bedrock(5460819),
    mc_sand(14406560),
    mc_red_sand(11098145),
    mc_gravel(8289402),
    mc_gold_ore(9407356),
    mc_iron_ore(8880766),
    mc_coal_ore(7566195),
    mc_oak_wood(6705457),
    mc_spruce_wood(2956300),
    mc_birch_wood(13553353),
    mc_jungle_wood(5718810),
    mc_acacia_wood(6906713),
    mc_dark_oak_wood(3418135),
    mc_oak_leaves(3169061),
    mc_spruce_leaves(2706976),
    mc_birch_leaves(3169061),
    mc_jungle_leaves(3432229),
    mc_acacia_leaves(3169061),
    mc_dark_oak_leaves(3169061),
    mc_sponge(12763988),
    mc_wet_sponge(10526271),
    mc_glass(14348532),
    mc_lapis_lazuli_ore(6713478),
    mc_lapis_lazuli_block(2507657),
    mc_dispenser(6316128),
    mc_sandstone(14209437),
    mc_chiseled_sandstone(14143642),
    mc_smooth_sandstone(14406561),
    mc_note_block(6570802),
    mc_powered_rail(8678472),
    mc_detector_rail(7890265),
    mc_sticky_piston(6973023),
    mc_cobweb(14474460),
    mc_grass(4351033),
    mc_fern(3823922),
    mc_dead_bush(8081177),
    mc_wool(14540253),
    mc_orange_wool(14384446),
    mc_magenta_wool(11751612),
    mc_light_blue_wool(6982345),
    mc_yellow_wool(11642407),
    mc_lime_wool(4304440),
    mc_pink_wool(13665433),
    mc_gray_wool(4210752),
    mc_light_gray_wool(10133921),
    mc_cyan_wool(3042953),
    mc_purple_wool(8273333),
    mc_blue_wool(3029133),
    mc_brown_wool(5190175),
    mc_green_wool(3491355),
    mc_red_wool(9843760),
    mc_black_wool(1644054),
    mc_dandelion(7119360),
    mc_poppy(6568196),
    mc_blue_orchid(2463882),
    mc_allium(11636179),
    mc_azure_bluet(10665866),
    mc_red_tulip(6784806),
    mc_orange_tulip(6260256),
    mc_white_tulip(6199617),
    mc_pink_tulip(6657609),
    mc_oxeye_daisy(11584907),
    mc_minecraftblocksmushroom_brown(9070931),
    mc_minecraftblocksmushroom_red(12793144),
    mc_block_gold(16378958),
    mc_block_iron(14408667),
    mc_stone_slab(10921638),
    mc_bricks_slab(9593686),
    mc_stone_bricks_slab(8026746),
    mc_nether_brick_slab(2889242),
    mc_quartz_slab(15526370),
    mc_tnt(11099207),
    mc_bookshelf(7034937),
    mc_moss_stone(6781287),
    mc_obsidian(1315357),
    mc_torch(8546874),
    mc_monster_spawner(1713969),
    mc_diamond_ore(8490127),
    mc_block_diamond(6413269),
    mc_crafting_table(7561023),
    mc_minecraftblocksfurnace_front_off(5131854),
    mc_minecraftblocksfurnace_front_on(8218197),
    mc_ladder(7954228),
    mc_rail(7957592),
    mc_redstone_ore(8678251),
    mc_redstone_torch(10963753),
    mc_snow(15727611),
    mc_ice(8236543),
    mc_cactus(878104),
    mc_clay(10396848),
    mc_jukebox(6570802),
    mc_pumpkin(9325580),
    mc_netherrack(7288372),
    mc_soul_sand(5521459),
    mc_glowstone(9401925),
    mc_jacko_lantern(12158236),
    mc_wooden_trapdoor(8281389),
    mc_mossy_stone_brick_monster_egg(7501674),
    mc_cracked_stone_brick_monster_egg(7763574),
    mc_chiseled_stone_brick_monster_egg(7763574),
    mc_minecraftblocksmushroom_block(13282168),
    mc_iron_bars(7171178),
    mc_melon(9277732),
    mc_vines(2051850),
    mc_mycelium(7428169),
    mc_lily_pad(3430955),
    mc_enchantment_table(1183771),
    mc_end_portal(9674875),
    mc_end_stone(14540709),
    mc_dragon_egg(788751),
    mc_redstone_lamp(4598554),
    mc_emerald_ore(7176308),
    mc_block_emerald(5364085),
    mc_command_block(11700591),
    mc_anvil(4210752),
    mc_daylight_sensor(8549470),
    mc_block_redstone(11213577),
    mc_nether_quartz_ore(8213583),
    mc_hopper(4079166),
    mc_quartz(15197404),
    mc_pillar_quartz_block(15197147),
    mc_activator_rail(6837063),
    mc_white_stained_clay(13742753),
    mc_orange_stained_clay(10572581),
    mc_magenta_stained_clay(9787500),
    mc_light_blue_stained_clay(7433353),
    mc_yellow_stained_clay(12223779),
    mc_lime_stained_clay(6780212),
    mc_pink_stained_clay(10571342),
    mc_gray_stained_clay(3746339),
    mc_light_gray_stained_clay(8874593),
    mc_cyan_stained_clay(5659483),
    mc_purple_stained_clay(7751254),
    mc_blue_stained_clay(4864859),
    mc_brown_stained_clay(5059363),
    mc_green_stained_clay(5002026),
    mc_red_stained_clay(9387310),
    mc_black_stained_clay(2430480),
    mc_barrier(13768985),
    mc_iron_trapdoor(13092807),
    mc_hay_bale(10318866),
    mc_hardened_clay(9854018),
    mc_block_coal(1184274),
    mc_packed_ice(10863349),
    mc_slime_block(7915621),
    mc_sunflower(4287787),
    mc_lilac(9344132),
    mc_double_tallgrass(9211020),
    mc_large_fern(8092539),
    mc_rose_bush(4538371),
    mc_peony(3561531),
    mc_white_stained_glass(16777215),
    mc_orange_stained_glass(14188339),
    mc_magenta_stained_glass(11685080),
    mc_light_blue_stained_glass(6724056),
    mc_yellow_stained_glass(15066419),
    mc_lime_stained_glass(8375321),
    mc_pink_stained_glass(15892389),
    mc_gray_stained_glass(5000268),
    mc_light_gray_stained_glass(10066329),
    mc_cyan_stained_glass(5013401),
    mc_purple_stained_glass(8339378),
    mc_blue_stained_glass(3361970),
    mc_brown_stained_glass(6704179),
    mc_green_stained_glass(6717235),
    mc_red_stained_glass(10040115),
    mc_black_stained_glass(1644825),
    mc_prismarine(6527117),
    mc_prismarine_bricks(6529167),
    mc_dark_prismarine(3888971),
    mc_sea_lantern(11323326),
    mc_red_sandstone(10834973),
    mc_chiseled_red_sandstone(10637851),
    mc_smooth_red_sandstone(11031838);
    
    private Color c;
    
    NamedColors(int hex) {
      this.c = new Color(hex);
    }
    
    final Color getColor() {
      return this.c;
    }
  }
  
  public static Color parseColor(String s) {
    Color returnColor = null;
    s = s.trim().toLowerCase(Locale.US);
    try {
      returnColor = NamedColors.valueOf(s).getColor();
    } catch (IllegalArgumentException illegalArgumentException) {}
    if (returnColor == null)
      if (s.startsWith("0x")) {
        String hex = s.substring(2);
        if (hex.length() == 3 || hex.length() == 4) {
          StringBuilder newHex = new StringBuilder();
          for (char c : hex.toCharArray()) {
            newHex.append(c);
            newHex.append(c);
          } 
          hex = newHex.toString();
        } 
        if (hex.length() == 6 || hex.length() == 8) {
          returnColor = new Color(Integer.parseInt(hex, 16));
          if (hex.length() == 8)
            returnColor = new Color(returnColor.getRed(), returnColor.getGreen(), returnColor.getBlue(), Integer.parseInt(hex.substring(0, 2), 16)); 
        } else {
          throw new NumberFormatException("Invalid hex format detected while attempting to parse color value: " + s);
        } 
      } else {
        try {
          returnColor = new Color(Integer.parseInt(s));
        } catch (Exception e) {
          throw new NumberFormatException("Invalid integer format detected while attempting to parse color value: " + s);
        } 
      }  
    return returnColor;
  }
}
package com.mia.props.common;

import com.mia.props.Props;
import com.mia.props.TabProps;
import net.minecraft.creativetab.CreativeTabs;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.util.NonNullList;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;

public class ItemCratingClay extends Item {
  public static String[] clayNames = new String[] { "red", "blue", "green" };
  
  public ItemCratingClay() {
    func_77656_e(0);
    func_77627_a(true);
    func_77637_a((CreativeTabs)TabProps.Main.get());
  }
  
  public String func_77667_c(ItemStack par1ItemStack) {
    return "items.craftingclay." + clayNames[par1ItemStack.func_77952_i()];
  }
  
  @SideOnly(Side.CLIENT)
  public void func_150895_a(CreativeTabs tab, NonNullList<ItemStack> subItems) {
    if (tab == TabProps.Main.get() || tab == CreativeTabs.field_78027_g || tab == null) {
      subItems.add(new ItemStack(Props.itemClay, 1, 0));
      subItems.add(new ItemStack(Props.itemClay, 1, 1));
      subItems.add(new ItemStack(Props.itemClay, 1, 2));
    } 
  }
}
package com.mia.props.common;

import com.mia.props.Props;
import net.minecraft.block.state.IBlockState;
import net.minecraft.nbt.NBTBase;
import net.minecraft.nbt.NBTTagCompound;
import net.minecraft.nbt.NBTTagIntArray;
import net.minecraft.network.NetworkManager;
import net.minecraft.network.play.server.SPacketUpdateTileEntity;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import net.minecraftforge.fml.common.FMLLog;

public class TileFake extends TileEntity {
  public int[] master = new int[3];
  
  public void setMasterTile(TileProps master) {
    this.master[0] = master.func_174877_v().func_177958_n();
    this.master[1] = master.func_174877_v().func_177956_o();
    this.master[2] = master.func_174877_v().func_177952_p();
  }
  
  public boolean shouldRenderInPass(int pass) {
    return false;
  }
  
  public TileProps getMaster() {
    if (this.master.length != 3) {
      FMLLog.info("Error while retrieving Master tile from Fake tile @ " + this.field_174879_c, new Object[0]);
      return null;
    } 
    TileEntity tile = Props.getTileEntityWithoutCreating(this.field_145850_b, new BlockPos(this.master[0], this.master[1], this.master[2]));
    if (!(tile instanceof TileProps))
      return null; 
    return (TileProps)tile;
  }
  
  public void func_145839_a(NBTTagCompound compound) {
    super.func_145839_a(compound);
    this.master = compound.func_74759_k("master");
  }
  
  public NBTTagCompound func_189515_b(NBTTagCompound compound) {
    super.func_189515_b(compound);
    NBTTagIntArray masterTag = new NBTTagIntArray(this.master);
    compound.func_74782_a("master", (NBTBase)masterTag);
    return compound;
  }
  
  public SPacketUpdateTileEntity func_189518_D_() {
    return new SPacketUpdateTileEntity(func_174877_v(), 0, func_189517_E_());
  }
  
  public void onDataPacket(NetworkManager net, SPacketUpdateTileEntity pkt) {
    func_145839_a(pkt.func_148857_g());
  }
  
  public NBTTagCompound func_189517_E_() {
    return func_189515_b(new NBTTagCompound());
  }
  
  public void handleUpdateTag(NBTTagCompound tag) {
    func_145839_a(tag);
  }
  
  public boolean shouldRefresh(World world, BlockPos pos, IBlockState oldState, IBlockState newSate) {
    return (oldState.func_177230_c() != newSate.func_177230_c());
  }
}
package com.mia.props.common;

import com.mia.craftstudio.CSModel;
import com.mia.craftstudio.libgdx.Vector3;
import com.mia.craftstudio.minecraft.BlockDimensionalPosition;
import com.mia.craftstudio.minecraft.CraftStudioModelWrapper;
import com.mia.craftstudio.minecraft.IAnimatedTile;
import com.mia.props.DecoModelMetadata;
import com.mia.props.Props;
import com.mia.props.network.Msg0x00SwitchRunning;
import com.mia.props.network.NetworkHelper;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Random;
import java.util.Set;
import net.minecraft.block.Block;
import net.minecraft.block.material.Material;
import net.minecraft.block.properties.IProperty;
import net.minecraft.block.state.IBlockState;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.init.Blocks;
import net.minecraft.item.ItemStack;
import net.minecraft.nbt.NBTBase;
import net.minecraft.nbt.NBTTagCompound;
import net.minecraft.nbt.NBTTagIntArray;
import net.minecraft.nbt.NBTTagList;
import net.minecraft.network.EnumPacketDirection;
import net.minecraft.network.NetworkManager;
import net.minecraft.network.play.server.SPacketUpdateTileEntity;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.EnumHand;
import net.minecraft.util.math.AxisAlignedBB;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.IBlockAccess;
import net.minecraft.world.World;
import net.minecraft.world.chunk.Chunk;
import net.minecraftforge.fml.common.network.simpleimpl.IMessage;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;

public class TileProps extends TileEntity implements IAnimatedTile {
  public int oldLight = -1;
  
  public int type = 0;
  
  public int rotation;
  
  protected boolean isRunning = false;
  
  public Random rand = new Random();
  
  public Set<BlockPos> slaves = new HashSet<>();
  
  public Map<String, String> tileParams = new HashMap<>();
  
  protected boolean initialized = false;
  
  public void init() {}
  
  public boolean shouldRenderInPass(int pass) {
    return (pass == 0 || pass == 1);
  }
  
  private BlockDimensionalPosition dimpos = null;
  
  public BlockDimensionalPosition getBlockPosDim() {
    if (this.dimpos == null)
      this.dimpos = new BlockDimensionalPosition(this.field_145850_b.field_73011_w.getDimension(), func_174877_v().func_177958_n(), func_174877_v().func_177956_o(), func_174877_v().func_177952_p()); 
    return this.dimpos;
  }
  
  public void func_145843_s() {
    super.func_145843_s();
    this.dimpos = null;
  }
  
  public void func_145829_t() {
    super.func_145829_t();
    this.dimpos = null;
  }
  
  public void func_145836_u() {
    super.func_145836_u();
    this.dimpos = null;
  }
  
  public void func_145839_a(NBTTagCompound compound) {
    super.func_145839_a(compound);
    this.type = compound.func_74762_e("BlockType");
    this.rotation = compound.func_74762_e("BlockRotation");
    this.isRunning = compound.func_74764_b("isRunning") ? compound.func_74767_n("isRunning") : false;
    NBTTagList slaves = compound.func_150295_c("slaves", 11);
    for (int i = 0; i < slaves.func_74745_c(); i++) {
      int[] pos = slaves.func_150306_c(i);
      this.slaves.add(new BlockPos(pos[0], pos[1], pos[2]));
    } 
    init();
    this.tileParams = ((DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.type))).tileParams;
  }
  
  public NBTTagCompound func_189515_b(NBTTagCompound compound) {
    super.func_189515_b(compound);
    compound.func_74768_a("BlockType", this.type);
    compound.func_74768_a("BlockRotation", this.rotation);
    compound.func_74757_a("isRunning", this.isRunning);
    NBTTagList slavesLst = new NBTTagList();
    for (BlockPos slave : this.slaves) {
      NBTTagIntArray pos = new NBTTagIntArray(new int[] { slave.func_177958_n(), slave.func_177956_o(), slave.func_177952_p() });
      slavesLst.func_74742_a((NBTBase)pos);
    } 
    compound.func_74782_a("slaves", (NBTBase)slavesLst);
    return compound;
  }
  
  public SPacketUpdateTileEntity func_189518_D_() {
    return new SPacketUpdateTileEntity(func_174877_v(), 0, func_189517_E_());
  }
  
  private TileProps processTileData(NBTTagCompound compound) {
    TileProps tile = this;
    if (compound.func_74764_b("BlockType") && !((DecoModelMetadata)Props.modelData.get(Integer.valueOf(compound.func_74762_e("BlockType")))).tileType.getTileClass().equals(tile.getClass())) {
      tile.func_145843_s();
      tile = (TileProps)((BlockProps)Props.blockProps).func_149915_a(this.field_145850_b, compound.func_74762_e("BlockType"));
      Chunk chunk = this.field_145850_b.func_175726_f(func_174877_v());
      if (chunk != null)
        chunk.func_177426_a(func_174877_v(), tile); 
      this.field_145850_b.func_175700_a(tile);
    } 
    tile.func_145839_a(compound);
    return tile;
  }
  
  private void processClientTile(TileProps tile) {
    BlockPos blockPos = tile.func_174877_v();
    IBlockState blockState = tile.field_145850_b.func_180495_p(blockPos);
    tile.field_145850_b.func_184138_a(this.field_174879_c, blockState, blockState, 2);
    int lightValue = tile.getLightValue((IBlockAccess)tile.field_145850_b, blockPos);
    if (tile.field_145850_b != null && tile.oldLight != lightValue) {
      tile.field_145850_b.func_175664_x(blockPos);
      tile.oldLight = lightValue;
    } 
  }
  
  public void onDataPacket(NetworkManager net, SPacketUpdateTileEntity pkt) {
    TileProps tile = processTileData(pkt.func_148857_g());
    if (net.getDirection() == EnumPacketDirection.CLIENTBOUND)
      processClientTile(tile); 
  }
  
  public NBTTagCompound func_189517_E_() {
    return func_189515_b(new NBTTagCompound());
  }
  
  public void handleUpdateTag(NBTTagCompound tag) {
    processClientTile(processTileData(tag));
  }
  
  public void renderParticles(World world, BlockPos pos, IBlockState state, Random rand) {}
  
  public void onBlockClicked(World world, BlockPos pos, EntityPlayer player) {}
  
  public boolean onBlockActivated(World world, BlockPos pos, IBlockState state, EntityPlayer player, EnumHand hand, EnumFacing side, float hitX, float hitY, float hitZ) {
    return false;
  }
  
  public int getMetadata() {
    return this.rotation;
  }
  
  public void switchIsRunning() {
    this.isRunning = !this.isRunning;
    sendSwitchUpdate();
  }
  
  public void setIsRunning(boolean state) {
    this.isRunning = state;
    sendSwitchUpdate();
  }
  
  private void sendSwitchUpdate() {
    if (!this.field_145850_b.field_72995_K) {
      NetworkHelper.INSTANCE.network.sendToDimension((IMessage)new Msg0x00SwitchRunning(this), this.field_145850_b.field_73011_w.getDimension());
      func_70296_d();
      BlockPos pos = func_174877_v();
      IBlockState blockState = this.field_145850_b.func_180495_p(pos);
      this.field_145850_b.func_184138_a(pos, blockState, blockState, 3);
      this.field_145850_b.func_175664_x(pos);
    } 
  }
  
  public boolean getIsRunning() {
    return this.isRunning;
  }
  
  public boolean isBed() {
    return false;
  }
  
  public int getLightValue(IBlockAccess world, BlockPos pos) {
    if (getModelData() != null)
      return (getModelData()).lightLevel; 
    return 0;
  }
  
  public int getSizeInventoryX() {
    return (getModelData()).invX;
  }
  
  public int getSizeInventoryY() {
    return (getModelData()).invY;
  }
  
  public void breakBlock(World world, BlockPos pos, IBlockState state) {}
  
  public void harvestBlock(World world, EntityPlayer player, BlockPos pos, IBlockState state, ItemStack stack) {
    NBTTagCompound savedNBT = null;
    if (onItemStackDropSaveNBT()) {
      savedNBT = new NBTTagCompound();
      func_189515_b(savedNBT);
      savedNBT.func_82580_o("slaves");
    } 
    ItemStack droppedItem = new ItemStack(Props.itemProps, 1, this.type);
    if (savedNBT != null)
      droppedItem.func_77983_a("savedProp", (NBTBase)savedNBT); 
    Block.func_180635_a(world, pos, droppedItem);
  }
  
  public boolean onItemStackDropSaveNBT() {
    return false;
  }
  
  public void addSlave(TileFake slave) {
    this.slaves.add(slave.func_174877_v());
  }
  
  public void rmSlave(TileFake slave) {
    this.slaves.remove(slave.func_174877_v());
    this.field_145850_b.func_175698_g(slave.func_174877_v());
  }
  
  public void removeSlaves() {
    for (BlockPos slave : this.slaves)
      this.field_145850_b.func_175698_g(slave); 
  }
  
  public DecoModelMetadata getModelData() {
    return (DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.type));
  }
  
  public void markRenderDirty() {}
  
  public boolean sameID(TileEntity tile) {
    if (!(tile instanceof TileProps))
      return false; 
    return ((getModelData()).decocraftModelID == (((TileProps)tile).getModelData()).decocraftModelID);
  }
  
  public boolean shouldRefresh(World world, BlockPos pos, IBlockState oldState, IBlockState newSate) {
    return (oldState.func_177230_c() != newSate.func_177230_c());
  }
  
  @SideOnly(Side.CLIENT)
  public AxisAlignedBB getRenderBoundingBox() {
    Vector3[] bounds = ((DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.type))).wrapper.getExtend(this.rotation);
    BlockPos pos = func_174877_v();
    return new AxisAlignedBB((pos.func_177958_n() + (bounds[0]).x), (pos.func_177956_o() + (bounds[0]).y), (pos.func_177952_p() + (bounds[0]).z), (pos.func_177958_n() + (bounds[1]).x), (pos.func_177956_o() + (bounds[1]).y), (pos.func_177952_p() + (bounds[1]).z));
  }
  
  public void setBedOccupied(IBlockAccess world, BlockPos pos, EntityPlayer player, boolean occupied) {}
  
  public BlockPos getBedSpawnPosition(IBlockAccess world, BlockPos pos, EntityPlayer player) {
    return pos;
  }
  
  public int getRenderingType() {
    return this.type;
  }
  
  public void neighborChanged(IBlockState state, World worldIn, BlockPos pos, Block blockIn, BlockPos fromPos) {}
  
  public void blockPlaced(IBlockState state, World worldIn, BlockPos pos) {}
  
  public void createSlaves() {
    DecoModelMetadata data = (DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.type));
    int[] extendBlock = data.wrapper.getExtendPlacementBlock(this.rotation);
    for (int lx = extendBlock[0]; lx <= extendBlock[3]; lx++) {
      for (int ly = (data.csmodel.getRootNode() != null && data.csmodel.getRootNode().hasAttribute(CSModel.ModelNode.Attrb.IGNOREBELOWYPLANE)) ? 0 : extendBlock[1]; ly <= extendBlock[4]; ly++) {
        for (int lz = extendBlock[2]; lz <= extendBlock[5]; lz++) {
          if (lx != 0 || ly != 0 || lz != 0) {
            BlockPos trgBlockPos = new BlockPos(lx + this.field_174879_c.func_177958_n(), ly + this.field_174879_c.func_177956_o(), lz + this.field_174879_c.func_177952_p());
            Block targetBlock = this.field_145850_b.func_180495_p(trgBlockPos).func_177230_c();
            if (targetBlock == Props.blockFake) {
              TileFake targetFake = (TileFake)this.field_145850_b.func_175625_s(trgBlockPos);
              TileProps targetMaster = targetFake.getMaster();
              if (targetMaster != null)
                targetMaster.rmSlave(targetFake); 
            } 
            if (targetBlock != Props.blockProps) {
              this.field_145850_b.func_175656_a(trgBlockPos, Props.blockFake.func_176223_P().func_177226_a((IProperty)BlockFake.FACING, (Comparable)EnumFacing.NORTH));
              TileFake fakeTile = (TileFake)this.field_145850_b.func_175625_s(trgBlockPos);
              fakeTile.setMasterTile(this);
              addSlave(fakeTile);
              fakeTile.func_70296_d();
            } 
          } 
        } 
      } 
    } 
  }
  
  public static boolean canReplace(CraftStudioModelWrapper model, World world, int x, int y, int z, boolean isSneaking, int orient, int[] excludedArea) {
    int[] extendBlock = model.getExtendPlacementBlock(orient);
    for (int lx = extendBlock[0]; lx <= extendBlock[3]; lx++) {
      for (int ly = ((model.getMetadata()).csmodel.getRootNode() != null && (model.getMetadata()).csmodel.getRootNode().hasAttribute(CSModel.ModelNode.Attrb.IGNOREBELOWYPLANE)) ? 0 : extendBlock[1]; ly <= extendBlock[4]; ly++) {
        for (int lz = extendBlock[2]; lz <= extendBlock[5]; lz++) {
          if (lx < excludedArea[0] || lx > excludedArea[3] || ly < excludedArea[1] || ly > excludedArea[4] || lz < excludedArea[2] || lz > excludedArea[5]) {
            IBlockState blockState = world.func_180495_p(new BlockPos(lx + x, ly + y, lz + z));
            Block targetBlock = blockState.func_177230_c();
            if (blockState.func_185904_a() != Material.field_151579_a && targetBlock != Blocks.field_150329_H && targetBlock != Blocks.field_150431_aC && (!isSneaking || targetBlock != Props.blockFake) && (!isSneaking || targetBlock != Props.blockProps))
              return false; 
          } 
        } 
      } 
    } 
    return true;
  }
  
  public static boolean canPlace(CraftStudioModelWrapper model, World world, int x, int y, int z, boolean isSneaking, int orient) {
    int[] extendBlock = model.getExtendPlacementBlock(orient);
    for (int lx = extendBlock[0]; lx <= extendBlock[3]; lx++) {
      for (int ly = ((model.getMetadata()).csmodel.getRootNode() != null && (model.getMetadata()).csmodel.getRootNode().hasAttribute(CSModel.ModelNode.Attrb.IGNOREBELOWYPLANE)) ? 0 : extendBlock[1]; ly <= extendBlock[4]; ly++) {
        for (int lz = extendBlock[2]; lz <= extendBlock[5]; lz++) {
          IBlockState blockState = world.func_180495_p(new BlockPos(lx + x, ly + y, lz + z));
          Block targetBlock = blockState.func_177230_c();
          if (blockState.func_185904_a() != Material.field_151579_a && targetBlock != Blocks.field_150329_H && targetBlock != Blocks.field_150431_aC && (!isSneaking || targetBlock != Props.blockFake) && (!isSneaking || targetBlock != Props.blockProps))
            return false; 
        } 
      } 
    } 
    return true;
  }
  
  public static TileProps checkAndGetTileEntity(World world, BlockPos finalPos, int type) {
    TileEntity tileentity = world.func_175625_s(finalPos);
    if (!(tileentity instanceof TileProps))
      throw new RuntimeException(String.format("Something went terribly wrong. Invalid TE detected after placement ! - %s", new Object[] { tileentity })); 
    TileProps tileProps = (TileProps)((BlockProps)Props.blockProps).func_149915_a(world, type);
    if (!tileProps.getClass().equals(tileentity.getClass())) {
      tileentity.func_145843_s();
      Chunk chunk = world.func_175726_f(finalPos);
      if (chunk != null)
        chunk.func_177426_a(finalPos, tileProps); 
      world.func_175700_a(tileProps);
    } else {
      tileProps = (TileProps)tileentity;
    } 
    return tileProps;
  }
}

package com.mia.props.common;

import com.google.common.collect.Maps;
import com.mia.props.common.entities.TileBaseSwitchable;
import com.mia.props.common.entities.TileBed;
import com.mia.props.common.entities.TileChair;
import com.mia.props.common.entities.TileContainer;
import com.mia.props.common.entities.TileDecobench;
import com.mia.props.common.entities.TileDoor;
import com.mia.props.common.entities.TileFaucet;
import com.mia.props.common.entities.TileLinkedModel;
import com.mia.props.common.entities.TileMountable;
import com.mia.props.common.entities.TileParticleEmitter;
import com.mia.props.common.entities.TileParticleEmitterSwitchable;
import com.mia.props.common.entities.TileRecordPlayer;
import com.mia.props.common.entities.TileShowerHandles;
import com.mia.props.common.entities.TileShowerHead;
import com.mia.props.common.entities.TileSwitchableLamp;
import com.mia.props.common.entities.TileTimedModel;
import com.mia.props.common.entities.TileVariableRendering;
import java.util.Map;
import net.minecraftforge.fml.common.registry.GameRegistry;

public enum TileTypeMap {
  Props(TileProps.class, new String[] { "TileBirdFountain" }),
  BaseSwitchable((Class)TileBaseSwitchable.class, new String[0]),
  Bed((Class)TileBed.class, new String[0]),
  Chair((Class)TileChair.class, new String[0]),
  Container((Class)TileContainer.class, new String[0]),
  Decobench((Class)TileDecobench.class, new String[0]),
  Mountable((Class)TileMountable.class, new String[0]),
  ShowerHandles((Class)TileShowerHandles.class, new String[0]),
  ShowerHead((Class)TileShowerHead.class, new String[0]),
  SwitchableLamp((Class)TileSwitchableLamp.class, new String[0]),
  ParticleEmitter((Class)TileParticleEmitter.class, new String[] { "TileChandelier", "TileChemistrySet", "TileCrystalChandelier", "TileCandleStick", "TileCandleWall" }),
  ParticleEmitterSwitchable((Class)TileParticleEmitterSwitchable.class, new String[0]),
  Faucet((Class)TileFaucet.class, new String[] { "TileKitchenFaucetInward", "TileKitchenFaucetOutward", "TileSinkFaucetInward", "TileSinkFaucetOutward", "TileTubFaucet" }),
  VariableRendering((Class)TileVariableRendering.class, new String[0]),
  RecordPlayer((Class)TileRecordPlayer.class, new String[0]),
  Door((Class)TileDoor.class, new String[0]),
  LinkedModel((Class)TileLinkedModel.class, new String[0]),
  TimedModel((Class)TileTimedModel.class, new String[0]);
  
  public static int tileEntityMapVersion;
  
  public static Map<String, String> lookupTable;
  
  private final Class<? extends TileProps> clazz;
  
  private final String[] altnames;
  
  static {
    tileEntityMapVersion = 1;
    lookupTable = Maps.newHashMap();
  }
  
  TileTypeMap(Class<? extends TileProps> clazz, String... altnames) {
    this.clazz = clazz;
    this.altnames = altnames;
  }
  
  public Class<? extends TileProps> getTileClass() {
    return this.clazz;
  }
  
  public static TileTypeMap getTileType(Class<? extends TileProps> clazz) {
    for (TileTypeMap type : values()) {
      if (type.clazz == clazz)
        return type; 
    } 
    return Props;
  }
  
  public static void register() {
    for (TileTypeMap type : values()) {
      String namespace_orig = "minecraft:";
      String namespace_target = "props:";
      String targetname = "props:" + type.clazz.getCanonicalName().toLowerCase();
      lookupTable.put("minecraft:" + type.clazz.getSimpleName().toLowerCase(), targetname);
      lookupTable.put("minecraft:" + type.clazz.getCanonicalName().toLowerCase(), targetname);
      lookupTable.put("minecraft:" + type.clazz.getCanonicalName().replace(".common.", ".").toLowerCase(), targetname);
      for (String s : type.altnames) {
        lookupTable.put("minecraft:com.mia.props.common.entities." + s.toLowerCase(), targetname);
        lookupTable.put("minecraft:com.mia.props.entities." + s.toLowerCase(), targetname);
      } 
      lookupTable.put("props:" + type.clazz.getSimpleName().toLowerCase(), targetname);
      lookupTable.put("props:" + type.clazz.getCanonicalName().toLowerCase(), targetname);
      lookupTable.put("props:" + type.clazz.getCanonicalName().replace(".common.", ".").toLowerCase(), targetname);
      for (String s : type.altnames) {
        lookupTable.put("props:com.mia.props.common.entities." + s.toLowerCase(), targetname);
        lookupTable.put("props:com.mia.props.entities." + s.toLowerCase(), targetname);
      } 
      GameRegistry.registerTileEntity(type.clazz, targetname);
    } 
    lookupTable.put("minecraft:tilefake", "props:" + TileFake.class.getCanonicalName().toLowerCase());
    GameRegistry.registerTileEntity(TileFake.class, "props:" + TileFake.class.getCanonicalName().toLowerCase());
  }
}
package com.mia.props.client.container;

import com.mia.props.common.entities.TileContainer;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.inventory.Container;
import net.minecraft.inventory.IInventory;
import net.minecraft.inventory.Slot;
import net.minecraft.item.ItemStack;
import net.minecraft.tileentity.TileEntity;

public class ContainerChestProps extends Container {
  private TileContainer tileEntity;
  
  private int invX;
  
  private int invY = 0;
  
  public ContainerChestProps(EntityPlayer player, TileEntity te) {
    this.tileEntity = (TileContainer)te;
    this.invX = this.tileEntity.getSizeInventoryX();
    this.invY = this.tileEntity.getSizeInventoryY();
    int widthSlots = this.invX * 18;
    int heightSlots = this.invY * 18;
    int leftMainInv = (180 - widthSlots) / 2;
    int leftHotbarInv = 9;
    int leftPlayerInv = 9;
    this.tileEntity.func_174889_b(player);
    for (int j = 0; j < this.invY; j++) {
      for (int x = 0; x < this.invX; x++)
        func_75146_a(new Slot((IInventory)this.tileEntity, x + j * this.invX, leftMainInv + x * 18 - 1, j * 18 + 1)); 
    } 
    for (int i = 0; i < 9; i++)
      func_75146_a(new Slot((IInventory)player.field_71071_by, i, i * 18 + 9 - 1, 151)); 
    for (int y = 0; y < 3; y++) {
      for (int x = 0; x < 9; x++)
        func_75146_a(new Slot((IInventory)player.field_71071_by, x + y * 9 + 9, x * 18 + 9 - 1, 94 + y * 18 + 1)); 
    } 
  }
  
  public boolean func_75145_c(EntityPlayer player) {
    return this.tileEntity.func_70300_a(player);
  }
  
  public ItemStack func_82846_b(EntityPlayer player, int islot) {
    int sizeTopInv = this.tileEntity.getSizeInventoryX() * this.tileEntity.getSizeInventoryY();
    ItemStack stackClicked = func_75139_a(islot).func_75211_c();
    if (stackClicked.func_190926_b())
      return ItemStack.field_190927_a; 
    ItemStack stackCpy = stackClicked.func_77946_l();
    if (islot < sizeTopInv) {
      if (!func_75135_a(stackClicked, sizeTopInv, this.field_75151_b.size(), true))
        return ItemStack.field_190927_a; 
    } else if (!func_75135_a(stackClicked, 0, sizeTopInv, false)) {
      return ItemStack.field_190927_a;
    } 
    if (stackClicked.func_190916_E() == 0) {
      func_75139_a(islot).func_75215_d(ItemStack.field_190927_a);
    } else {
      func_75139_a(islot).func_75218_e();
    } 
    return stackCpy;
  }
}
package com.mia.props.client.container;

import com.mia.props.Props;
import com.mia.props.common.entities.TileDecobench;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.inventory.Container;
import net.minecraft.inventory.IContainerListener;
import net.minecraft.inventory.IInventory;
import net.minecraft.inventory.Slot;
import net.minecraft.item.ItemStack;
import net.minecraft.tileentity.TileEntity;
import net.minecraftforge.oredict.OreDictionary;

public class ContainerDecobench extends Container {
  public final EntityPlayer player;
  
  public final TileDecobench table;
  
  private int[] prevResources = new int[4];
  
  public ContainerDecobench(EntityPlayer player, TileEntity tileTable) {
    this.player = player;
    this.table = (TileDecobench)tileTable;
    func_75146_a(new Slot((IInventory)this.table, 0, 10, 10) {
          public boolean func_75214_a(ItemStack stack) {
            for (ItemStack allowedStack : Props.allowableResourceItems) {
              if (OreDictionary.itemMatches(allowedStack, stack, false))
                return true; 
            } 
            return false;
          }
        });
    func_75146_a(new Slot((IInventory)this.table, 1, 10, 120) {
          public boolean func_75214_a(ItemStack stack) {
            return false;
          }
        });
    for (int y = 0; y < 3; y++) {
      for (int i = 0; i < 9; i++)
        func_75146_a(new Slot((IInventory)player.field_71071_by, i + y * 9 + 9, 21 + i * 18, 141 + y * 18)); 
    } 
    for (int x = 0; x < 9; x++)
      func_75146_a(new Slot((IInventory)player.field_71071_by, x, 21 + x * 18, 199)); 
  }
  
  public boolean func_75145_c(EntityPlayer player) {
    return this.table.func_70300_a(player);
  }
  
  public ItemStack func_82846_b(EntityPlayer player, int slot) {
    ItemStack stack = ItemStack.field_190927_a;
    Slot invSlot = func_75139_a(slot);
    if (invSlot.func_75216_d()) {
      ItemStack invStack = invSlot.func_75211_c();
      stack = invStack.func_77946_l();
      if (slot < 2) {
        if (!func_75135_a(invStack, 2, this.field_75151_b.size(), true))
          return ItemStack.field_190927_a; 
      } else {
        boolean allowed = false;
        for (ItemStack allowedStack : Props.allowableResourceItems) {
          if (OreDictionary.itemMatches(allowedStack, invStack, false)) {
            allowed = true;
            break;
          } 
        } 
        if (!allowed || !func_75135_a(invStack, 0, 1, false))
          return ItemStack.field_190927_a; 
      } 
      if (invStack.func_190916_E() == 0) {
        invSlot.func_75215_d(ItemStack.field_190927_a);
      } else {
        invSlot.func_75218_e();
      } 
    } 
    return stack;
  }
  
  public void func_75137_b(int index, int value) {
    this.table.setResource(index, value);
  }
  
  public void func_75142_b() {
    super.func_75142_b();
    for (int i = 0; i < 4; i++) {
      if (this.table.getResource(i) != this.prevResources[i]) {
        this.prevResources[i] = this.table.getResource(i);
        for (int j = 0; j < this.field_75149_d.size(); j++)
          ((IContainerListener)this.field_75149_d.get(j)).func_71112_a(this, i, this.table.getResource(i)); 
      } 
    } 
  }
}
package com.mia.props.client.container;

import com.mia.props.common.entities.TileContainer;
import net.minecraft.client.gui.inventory.GuiContainer;
import net.minecraft.entity.player.InventoryPlayer;
import net.minecraft.inventory.Container;
import net.minecraft.tileentity.TileEntity;
import net.minecraft.util.ResourceLocation;
import org.lwjgl.opengl.GL11;

public class GuiChestProps extends GuiContainer {
  private static final ResourceLocation background = new ResourceLocation("props:textures/gui/decogui1.png");
  
  protected int field_146999_f = 176;
  
  protected int field_147000_g = 183;
  
  protected InventoryPlayer inventory;
  
  protected TileContainer tileEntity;
  
  private int invX;
  
  private int invY = 0;
  
  private int topMainInv;
  
  private int leftMainInv = 0;
  
  private int topHotbarInv;
  
  private int leftHotbarInv = 0;
  
  private int topPlayerInv;
  
  private int leftPlayerInv = 0;
  
  public GuiChestProps(Container container, InventoryPlayer inventory, TileEntity te) {
    super(container);
    this.inventory = inventory;
    this.tileEntity = (TileContainer)te;
    this.invX = this.tileEntity.getSizeInventoryX();
    this.invY = this.tileEntity.getSizeInventoryY();
    int widthSlots = this.invX * 18;
    int heightSlots = this.invY * 18;
    this.leftMainInv = (this.field_146999_f - widthSlots) / 2;
    this.leftHotbarInv = (this.field_146999_f - 162) / 2;
    this.topPlayerInv = (this.field_146999_f - 162) / 2;
  }
  
  protected void func_146979_b(int param1, int param2) {
    GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
    this.field_146297_k.func_110434_K().func_110577_a(background);
    for (int x = 0; x < this.invX; x++) {
      for (int j = 0; j < this.invY; j++)
        func_73729_b(this.leftMainInv + x * 18, this.topMainInv + j * 18, 176, 0, 18, 18); 
    } 
    for (int i = 0; i < 9; i++)
      func_73729_b(this.leftHotbarInv + i * 18, 150, 176, 0, 18, 18); 
    for (int y = 0; y < 3; y++) {
      for (int j = 0; j < 9; j++)
        func_73729_b(this.leftHotbarInv + j * 18, 94 + 18 * y, 176, 0, 18, 18); 
    } 
  }
  
  protected void func_146976_a(float var1, int var2, int var3) {
    GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
    this.field_146297_k.func_110434_K().func_110577_a(background);
    int k = (this.field_146294_l - this.field_146999_f) / 2;
    int l = (this.field_146295_m - this.field_147000_g) / 2;
    func_73729_b(k, l, 0, 0, this.field_146999_f, 183);
  }
}
package com.mia.props.client.container;

import com.mia.props.DecoModelMetadata;
import com.mia.props.Props;
import com.mia.props.TabProps;
import com.mia.props.client.container.guilib.GuiDisableableButton;
import com.mia.props.client.container.guilib.GuiElement;
import com.mia.props.client.container.guilib.GuiGauge;
import com.mia.props.client.container.guilib.GuiLabel;
import com.mia.props.client.container.guilib.GuiTextBox;
import com.mia.props.client.container.guilib.GuiToggleButton;
import com.mia.props.client.container.guilib.IExposedGui;
import com.mia.props.client.container.guilib.IGuiHandlesMouseClick;
import com.mia.props.client.container.guilib.IGuiRenderable;
import com.mia.props.client.container.guilib.IGuiTooltip;
import com.mia.props.client.container.guilib.TextAlign;
import com.mia.props.common.entities.TileDecobench;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import net.minecraft.client.gui.FontRenderer;
import net.minecraft.client.gui.Gui;
import net.minecraft.client.gui.GuiScreen;
import net.minecraft.client.gui.ScaledResolution;
import net.minecraft.client.gui.inventory.GuiContainer;
import net.minecraft.client.renderer.RenderHelper;
import net.minecraft.client.renderer.RenderItem;
import net.minecraft.client.util.ITooltipFlag;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.item.ItemStack;
import net.minecraft.util.ResourceLocation;
import net.minecraft.util.math.MathHelper;
import net.minecraft.util.text.TextFormatting;
import net.minecraft.util.text.translation.I18n;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;
import org.lwjgl.input.Mouse;
import org.lwjgl.opengl.GL11;

@SideOnly(Side.CLIENT)
public class GuiDecobench extends GuiContainer implements IExposedGui<GuiContainer> {
  static final ResourceLocation texture = new ResourceLocation("props", "textures/gui/table.png");
  
  static final int i_w = 8;
  
  static final int i_h = 5;
  
  final EntityPlayer player;
  
  final TileDecobench table;
  
  float prevScroll = -1.0F;
  
  float currentScroll = 0.0F;
  
  boolean isScrolling = false;
  
  TabProps currentTab = TabProps.Art;
  
  final GuiElement scrollBar;
  
  final GuiElement scrollArea;
  
  final GuiElement slotInput;
  
  final GuiElement slotOutput;
  
  final GuiToggleButton checkboxTabFilter;
  
  final GuiDisableableButton buttonArrowLeft;
  
  final GuiDisableableButton buttonArrowRight;
  
  final GuiDisableableButton buttonAddResources;
  
  final GuiGauge[] gaugeResources;
  
  final GuiTextBox searchBox;
  
  final GuiLabel labelTitle;
  
  final GuiLabel labelTabFilter;
  
  final GuiLabel labelCurrentTab;
  
  ArrayList<ItemStack> allItems;
  
  final ArrayList<ItemStack> currentItems = new ArrayList<>();
  
  final ArrayList<DecoButton> decoButtons = new ArrayList<>(40);
  
  final ArrayList<IGuiHandlesMouseClick> guiClickables = new ArrayList<>();
  
  final ArrayList<IGuiRenderable> guiRenderables = new ArrayList<>();
  
  final ArrayList<IGuiRenderable> textRenderables = new ArrayList<>();
  
  final ArrayList<IGuiTooltip> guiTooltips = new ArrayList<>();
  
  final ArrayList<GuiElement> guiUpdatables = new ArrayList<>();
  
  public GuiDecobench(ContainerDecobench containerTable) {
    super(containerTable);
    this.player = containerTable.player;
    this.table = containerTable.table;
    this.field_146999_f = 202;
    this.field_147000_g = 223;
    this.scrollBar = new GuiElement(this, 181, 48, 13, 88);
    this.scrollArea = new GuiElement(this, 33, 47, 162, 90);
    this.slotInput = new GuiElement(this, 9, 9, 18, 18);
    this.slotOutput = new GuiElement(this, 9, 119, 18, 18);
    this.checkboxTabFilter = new GuiToggleButton(this, 33, 30, 15, 15, new int[] { 225, 197, 241, 197, 225, 181, 241, 181 }, false) {
        protected void mouseClickedCallback(int mouseButton) {
          GuiDecobench.this.buttonArrowLeft.setDisabled(!this.toggledOn);
          GuiDecobench.this.buttonArrowRight.setDisabled(!this.toggledOn);
          GuiDecobench.this.labelTabFilter.setColor(this.toggledOn ? 4210752 : 10526880);
          GuiDecobench.this.labelCurrentTab.setColor(this.toggledOn ? 4210752 : 10526880);
          GuiDecobench.this.updateAllItems();
        }
      };
    this.buttonArrowLeft = new GuiDisableableButton(this, 111, 30, 10, 15, new int[] { 192, 241, 203, 241, 214, 241 }, true) {
        protected void mouseClickedCallback(int mouseButton) {
          int next = GuiDecobench.this.currentTab.ordinal() - 1;
          if (next < 1)
            next = (TabProps.values()).length - 1; 
          GuiDecobench.this.currentTab = TabProps.values()[next];
          GuiDecobench.this.labelCurrentTab.setText(I18n.func_74838_a("text.props.gui.tab." + GuiDecobench.this.currentTab.name()));
          GuiDecobench.this.updateAllItems();
        }
      };
    this.buttonArrowRight = new GuiDisableableButton(this, 185, 30, 10, 15, new int[] { 192, 225, 203, 225, 214, 225 }, true) {
        protected void mouseClickedCallback(int mouseButton) {
          int next = GuiDecobench.this.currentTab.ordinal() + 1;
          if (next == (TabProps.values()).length)
            next = 1; 
          GuiDecobench.this.currentTab = TabProps.values()[next];
          GuiDecobench.this.labelCurrentTab.setText(I18n.func_74838_a("text.props.gui.tab." + GuiDecobench.this.currentTab.name()));
          GuiDecobench.this.updateAllItems();
        }
      };
    this.buttonAddResources = new GuiDisableableButton(this, 12, 29, 12, 8, new int[] { 228, 154, 228, 163, 228, 172 }, true) {
        public void update() {
          if (GuiDecobench.this.field_147002_h.func_75139_a(0).func_75216_d()) {
            this.tooltipEnabled = true;
            this.tooltipText.clear();
            this.tooltipText.add(I18n.func_74838_a("text.props.gui.resources.add"));
            boolean space = GuiDecobench.this.table.roomForResources(TileDecobench.resourcesProvidedByStack(GuiDecobench.this.field_147002_h.func_75139_a(0).func_75211_c()));
            this.disabled = (!GuiScreen.func_146272_n() && !space);
            if (!space)
              if (this.disabled) {
                this.tooltipText.add(TextFormatting.DARK_GRAY.toString() + TextFormatting.ITALIC + I18n.func_74838_a("text.props.gui.resources.add_loss_warning"));
              } else {
                this.tooltipText.add(TextFormatting.AQUA.toString() + TextFormatting.BOLD + I18n.func_74838_a("text.props.gui.resources.add_loss"));
              }  
          } else {
            this.tooltipEnabled = false;
            this.disabled = true;
          } 
        }
        
        protected void mouseClickedCallback(int mouseButton) {
          if (mouseButton == 0)
            GuiDecobench.this.table.onData((EntityPlayer)GuiDecobench.this.field_146297_k.field_71439_g, -1, GuiScreen.func_146272_n()); 
        }
      };
    this.gaugeResources = new GuiGauge[4];
    this.gaugeResources[0] = new GuiGauge(this, 7, 40, 22, 21, new int[] { 0, 0, 169, 235 }, false, false, false) {
        private int last = -1;
        
        public void update() {
          if (this.last == GuiDecobench.this.table.getResource(0))
            return; 
          this.last = GuiDecobench.this.table.getResource(0);
          setFill(GuiDecobench.this.table.getResource(0) / GuiDecobench.this.table.MAX_STORE[0]);
          this.tooltipText.clear();
          this.tooltipText.add(TextFormatting.GRAY + I18n.func_74838_a("text.props.gui.resources.clay"));
          this.tooltipText.add(TextFormatting.WHITE + String.format("%d / %d", new Object[] { Integer.valueOf(this.this$0.table.getResource(0)), Integer.valueOf(this.this$0.table.MAX_STORE[0]) }));
        }
      };
    this.gaugeResources[1] = new GuiGauge(this, 7, 88, 8, 28, new int[] { 123, 228, 146, 228 }, false, false, true) {
        private int last = -1;
        
        public void update() {
          if (this.last == GuiDecobench.this.table.getResource(1))
            return; 
          this.last = GuiDecobench.this.table.getResource(1);
          setFill(GuiDecobench.this.table.getResource(1) / GuiDecobench.this.table.MAX_STORE[1]);
          this.tooltipText.clear();
          this.tooltipText.add(TextFormatting.RED + I18n.func_74838_a("text.props.gui.resources.red"));
          this.tooltipText.add(TextFormatting.WHITE + String.format("%d / %d", new Object[] { Integer.valueOf(this.this$0.table.getResource(1)), Integer.valueOf(this.this$0.table.MAX_STORE[1]) }));
        }
      };
    this.gaugeResources[2] = new GuiGauge(this, 14, 88, 8, 28, new int[] { 130, 228, 153, 228 }, false, false, true) {
        private int last = -1;
        
        public void update() {
          if (this.last == GuiDecobench.this.table.getResource(2))
            return; 
          this.last = GuiDecobench.this.table.getResource(2);
          setFill(GuiDecobench.this.table.getResource(2) / GuiDecobench.this.table.MAX_STORE[2]);
          this.tooltipText.clear();
          this.tooltipText.add(TextFormatting.GREEN + I18n.func_74838_a("text.props.gui.resources.green"));
          this.tooltipText.add(TextFormatting.WHITE + String.format("%d / %d", new Object[] { Integer.valueOf(this.this$0.table.getResource(2)), Integer.valueOf(this.this$0.table.MAX_STORE[2]) }));
        }
      };
    this.gaugeResources[3] = new GuiGauge(this, 21, 88, 8, 28, new int[] { 137, 228, 160, 228 }, false, false, true) {
        private int last = -1;
        
        public void update() {
          if (this.last == GuiDecobench.this.table.getResource(3))
            return; 
          this.last = GuiDecobench.this.table.getResource(3);
          setFill(GuiDecobench.this.table.getResource(3) / GuiDecobench.this.table.MAX_STORE[3]);
          this.tooltipText.clear();
          this.tooltipText.add(TextFormatting.BLUE + I18n.func_74838_a("text.props.gui.resources.blue"));
          this.tooltipText.add(TextFormatting.WHITE + String.format("%d / %d", new Object[] { Integer.valueOf(this.this$0.table.getResource(3)), Integer.valueOf(this.this$0.table.MAX_STORE[3]) }));
        }
      };
    this.searchBox = new GuiTextBox(this, 34, 17, 160, 10, I18n.func_74838_a("text.props.gui.search"), 4210752, 16777215);
    this.labelTitle = new GuiLabel(this, 101, 5, I18n.func_74838_a("text.props.gui.title"), TextAlign.CENTER, 2105376);
    this.labelTabFilter = new GuiLabel(this, 50, 34, I18n.func_74838_a("text.props.gui.filter.tab"), TextAlign.LEFT, 10526880);
    this.labelCurrentTab = new GuiLabel(this, 153, 34, I18n.func_74838_a("text.props.gui.tab." + this.currentTab.name()), TextAlign.CENTER, 10526880);
    this.guiClickables.add(this.checkboxTabFilter);
    this.guiClickables.add(this.buttonArrowLeft);
    this.guiClickables.add(this.buttonArrowRight);
    this.guiClickables.add(this.buttonAddResources);
    this.guiRenderables.add(this.checkboxTabFilter);
    this.guiRenderables.add(this.buttonArrowLeft);
    this.guiRenderables.add(this.buttonArrowRight);
    this.guiRenderables.add(this.buttonAddResources);
    this.textRenderables.add(this.searchBox);
    this.textRenderables.add(this.labelTitle);
    this.textRenderables.add(this.labelTabFilter);
    this.textRenderables.add(this.labelCurrentTab);
    this.guiTooltips.add(this.buttonAddResources);
    this.guiUpdatables.add(this.buttonAddResources);
    for (GuiGauge gauge : this.gaugeResources) {
      this.guiRenderables.add(gauge);
      this.guiTooltips.add(gauge);
      this.guiUpdatables.add(gauge);
    } 
    updateAllItems();
  }
  
  private void updateAllItems() {
    this.allItems = new ArrayList<>();
    ArrayList<DecoModelMetadata> metaList = new ArrayList<>(Props.modelData.values());
    Collections.sort(metaList);
    for (DecoModelMetadata data : metaList) {
      if ((!this.checkboxTabFilter.isToggledOn() || (this.checkboxTabFilter.isToggledOn() && data.tab == this.currentTab)) && 
        !data.hideDecobench)
        this.allItems.add(new ItemStack(Props.itemProps, 1, data.decocraftModelID)); 
    } 
    this.currentScroll = 0.0F;
    refreshButtons();
  }
  
  public void refreshButtons() {
    this.currentItems.clear();
    if (this.searchBox.text.trim().isEmpty()) {
      this.currentItems.addAll(this.allItems);
    } else {
      String searchName = this.searchBox.text.trim().toLowerCase();
      for (ItemStack stack : this.allItems) {
        if (stack.func_82833_r().toLowerCase().contains(searchName))
          this.currentItems.add(stack); 
      } 
    } 
    this.guiClickables.removeAll(this.decoButtons);
    this.guiTooltips.removeAll(this.decoButtons);
    this.decoButtons.clear();
    int i = this.currentItems.size() / 8 - 5 + 1;
    int j = (int)((this.currentScroll * i) + 0.5D);
    for (int y = 0; y < 5; y++) {
      for (int x = 0; x < 8; x++) {
        int idx = (this.currentItems.size() < 40) ? (x + y * 8) : (x + (y + j) * 8);
        if (idx >= 0 && idx < this.currentItems.size())
          this.decoButtons.add(new DecoButton(this.currentItems.get(idx), 34 + 18 * x, 48 + 18 * y)); 
      } 
    } 
    this.guiClickables.addAll((Collection)this.decoButtons);
    this.guiTooltips.addAll(this.decoButtons);
  }
  
  public void func_146976_a(float pt, int mouseX, int mouseY) {
    this.field_146297_k.func_110434_K().func_110577_a(texture);
    GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
    func_73729_b(this.field_147003_i, this.field_147009_r, 0, 0, this.field_146999_f, this.field_147000_g);
    func_73729_b(this.scrollBar.posX(), this.scrollBar.posY() + (int)(this.currentScroll * (this.scrollBar.getHeight() - 11)), 243, 169, 13, 11);
  }
  
  protected void func_146979_b(int mouseX, int mouseY) {
    GL11.glPushMatrix();
    GL11.glTranslatef(-this.field_147003_i, -this.field_147009_r, 0.0F);
    GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
    for (GuiElement element : this.guiUpdatables)
      element.update(); 
    boolean mouse = Mouse.isButtonDown(0);
    if (this.isScrolling) {
      if (mouse) {
        this.currentScroll = (mouseY - this.scrollBar.posY() - 5) / (this.scrollBar.getHeight() - 11);
        this.currentScroll = MathHelper.func_76131_a(this.currentScroll, 0.0F, 1.0F);
        if (this.prevScroll != this.currentScroll) {
          this.prevScroll = this.currentScroll;
          refreshButtons();
        } 
      } else {
        this.isScrolling = false;
      } 
    } else if (mouse && this.scrollBar.mouseOver(mouseX, mouseY)) {
      this.isScrolling = true;
    } 
    for (DecoButton d : this.decoButtons)
      d.render(mouseX, mouseY); 
    this.field_146297_k.func_110434_K().func_110577_a(texture);
    GL11.glColor4f(1.0F, 1.0F, 1.0F, 1.0F);
    for (IGuiRenderable renderable : this.guiRenderables)
      renderable.render(mouseX, mouseY); 
    for (IGuiRenderable renderable : this.textRenderables)
      renderable.render(mouseX, mouseY); 
    ArrayList<String> list = new ArrayList<>();
    for (IGuiTooltip tippedGui : this.guiTooltips) {
      if (tippedGui.mouseOver(mouseX, mouseY) && tippedGui.isTooltipEnabled())
        list.addAll(tippedGui.getTooltipText(mouseX, mouseY)); 
    } 
    if (this.slotInput.mouseOver(mouseX, mouseY) && !this.field_147002_h.func_75139_a(0).func_75216_d()) {
      list.add(I18n.func_74838_a("text.props.gui.slot.input"));
    } else if (this.slotOutput.mouseOver(mouseX, mouseY) && !this.field_147002_h.func_75139_a(1).func_75216_d()) {
      list.add(I18n.func_74838_a("text.props.gui.slot.output"));
    } 
    drawHoveringText(list, mouseX, mouseY, this.field_146289_q);
    RenderHelper.func_74520_c();
    GL11.glPopMatrix();
  }
  
  public void func_146274_d() throws IOException {
    super.func_146274_d();
    int i = Mouse.getEventDWheel();
    if (i == 0)
      return; 
    refreshButtons();
    if (this.currentItems.size() > this.decoButtons.size()) {
      int mouseX = Mouse.getEventX() * this.field_146294_l / this.field_146297_k.field_71443_c;
      int mouseY = this.field_146295_m - Mouse.getEventY() * this.field_146295_m / this.field_146297_k.field_71440_d - 1;
      if (this.scrollArea.mouseOver(mouseX, mouseY)) {
        int j = this.currentItems.size() / 8 - 5 + 1;
        if (i > 1) {
          i = 1;
        } else if (i < -1) {
          i = -1;
        } 
        this.currentScroll = MathHelper.func_76131_a(this.currentScroll - i / j, 0.0F, 1.0F);
        if (this.prevScroll != this.currentScroll) {
          this.prevScroll = this.currentScroll;
          refreshButtons();
        } 
      } 
    } 
  }
  
  public void func_73864_a(int mouseX, int mouseY, int mouseButton) throws IOException {
    if (this.searchBox.mousePressed(mouseX, mouseY, mouseButton)) {
      refreshButtons();
      return;
    } 
    for (IGuiHandlesMouseClick clickHandler : this.guiClickables) {
      if (clickHandler.mouseOver(mouseX, mouseY)) {
        clickHandler.mouseClicked(mouseButton);
        return;
      } 
    } 
    super.func_73864_a(mouseX, mouseY, mouseButton);
  }
  
  public void func_73869_a(char keyChar, int key) throws IOException {
    if (this.searchBox.keyPressed(key, keyChar)) {
      refreshButtons();
      return;
    } 
    super.func_73869_a(keyChar, key);
  }
  
  private class DecoButton extends GuiElement implements IGuiHandlesMouseClick, IGuiRenderable {
    public final ItemStack item;
    
    protected FontRenderer font;
    
    public DecoButton(ItemStack stack, int x, int y) {
      super(GuiDecobench.this, x, y, 16, 16);
      this.item = stack;
      this.tooltipEnabled = true;
    }
    
    public List<String> getTooltipText(int mouseX, int mouseY) {
      this.tooltipText.clear();
      this.tooltipText.addAll(this.item.func_82840_a((EntityPlayer)(this.parent.getGui()).field_146297_k.field_71439_g, (this.parent.getGui()).field_146297_k.field_71474_y.field_82882_x ? (ITooltipFlag)ITooltipFlag.TooltipFlags.ADVANCED : (ITooltipFlag)ITooltipFlag.TooltipFlags.NORMAL));
      if (!((DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.item.func_77952_i()))).isCraftable(GuiDecobench.this.table.getResources()))
        this.tooltipText.add(TextFormatting.LIGHT_PURPLE + I18n.func_74838_a("text.props.gui.resources.insufficient")); 
      return this.tooltipText;
    }
    
    public void render(int mouseX, int mouseY) {
      GL11.glPushMatrix();
      if (this.font == null) {
        this.font = this.item.func_77973_b().getFontRenderer(this.item);
        if (this.font == null)
          this.font = GuiDecobench.this.field_146289_q; 
      } 
      RenderHelper.func_74520_c();
      GuiDecobench.this.field_146296_j.func_180450_b(this.item, posX(), posY());
      if (!((DecoModelMetadata)Props.modelData.get(Integer.valueOf(this.item.func_77952_i()))).isCraftable(GuiDecobench.this.table.getResources())) {
        GL11.glDisable(2896);
        GL11.glDisable(2929);
        GL11.glEnable(3042);
        GL11.glColorMask(true, true, true, false);
        this.parent._drawGradientRect(posX(), posY(), posX() + 16, posY() + 16, -1877995504, -1609560048);
        GL11.glColorMask(true, true, true, true);
        GL11.glEnable(2929);
      } 
      RenderHelper.func_74518_a();
      GL11.glPopMatrix();
    }
    
    public void mouseClicked(int mouseButton) {
      if (mouseButton == 0)
        GuiDecobench.this.table.onData((EntityPlayer)GuiDecobench.this.field_146297_k.field_71439_g, this.item.func_77952_i(), GuiScreen.func_146272_n()); 
    }
  }
  
  public boolean isMouseOverButtonScrollArea() {
    ScaledResolution scaledresolution = new ScaledResolution(this.field_146297_k);
    int i = scaledresolution.func_78326_a();
    int j = scaledresolution.func_78328_b();
    int k = Mouse.getX() * i / this.field_146297_k.field_71443_c;
    int l = j - Mouse.getY() * j / this.field_146297_k.field_71440_d - 1;
    return this.scrollArea.mouseOver(k, l);
  }
  
  public GuiContainer getGui() {
    return this;
  }
  
  public float getZLevel() {
    return this.field_73735_i;
  }
  
  public int getGuiLeft() {
    return this.field_147003_i;
  }
  
  public int getGuiTop() {
    return this.field_147009_r;
  }
  
  public FontRenderer getFontRenderer() {
    return this.field_146289_q;
  }
  
  public void _drawGradientRect(int left, int top, int right, int bottom, int colorStart, int colorEnd) {
    func_73733_a(left, top, right, bottom, colorStart, colorEnd);
  }
}
package com.mia.props.client.container;

import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import net.minecraftforge.fml.common.network.IGuiHandler;

public class GuiHandler implements IGuiHandler {
  public static final int CHEST_ID = 0;
  
  public static final int TABLE_ID = 1;
  
  public Object getServerGuiElement(int ID, EntityPlayer player, World world, int x, int y, int z) {
    BlockPos pos = new BlockPos(x, y, z);
    if (ID == 0)
      return new ContainerChestProps(player, world.func_175625_s(pos)); 
    if (ID == 1)
      return new ContainerDecobench(player, world.func_175625_s(pos)); 
    return null;
  }
  
  public Object getClientGuiElement(int ID, EntityPlayer player, World world, int x, int y, int z) {
    BlockPos pos = new BlockPos(x, y, z);
    if (ID == 0)
      return new GuiChestProps(new ContainerChestProps(player, world.func_175625_s(pos)), player.field_71071_by, world.func_175625_s(pos)); 
    if (ID == 1)
      return new GuiDecobench(new ContainerDecobench(player, world.func_175625_s(pos))); 
    return null;
  }
}
package com.mia.props.client.container.guilib;

import net.minecraft.client.gui.Gui;
import net.minecraft.client.renderer.BufferBuilder;
import net.minecraft.client.renderer.Tessellator;
import net.minecraft.client.renderer.vertex.DefaultVertexFormats;

public class GuiGauge extends GuiElement implements IGuiRenderable {
  private int[] textureUVs;
  
  protected boolean horizontal = false;
  
  protected boolean topleftStart = true;
  
  protected boolean drawBackground = false;
  
  protected float fill = 0.0F;
  
  public GuiGauge(IExposedGui<? extends Gui> parent, int x, int y, int width, int height, int[] iconUVs, boolean horizontal, boolean topleftStart, boolean drawBackground) {
    super((IExposedGui)parent, x, y, width, height);
    this.textureUVs = iconUVs;
    this.horizontal = horizontal;
    this.topleftStart = topleftStart;
    this.drawBackground = drawBackground;
  }
  
  public void setFill(float fill) {
    if (fill > 1.0D) {
      fill = 1.0F;
    } else if (fill < 0.0F) {
      fill = 0.0F;
    } 
    this.fill = fill;
  }
  
  public void render(int mouseX, int mouseY) {
    float xPositionFullL, xPositionFullR, yPositionFullT, yPositionFullB, xTextureFullL, xTextureFullR, yTextureFullT, yTextureFullB;
    Tessellator tessellator = Tessellator.func_178181_a();
    if (this.drawBackground) {
      float xPositionEmptyL, xPositionEmptyR, yPositionEmptyT, yPositionEmptyB, xTextureEmptyL, xTextureEmptyR, yTextureEmptyT, yTextureEmptyB, height_empty = this.height_element;
      float width_empty = this.width_element;
      if (this.horizontal) {
        width_empty -= width_empty * this.fill;
      } else {
        height_empty -= height_empty * this.fill;
      } 
      if (this.topleftStart) {
        xPositionEmptyL = (posX() + this.width_element) - width_empty;
        xPositionEmptyR = (posX() + this.width_element);
        yPositionEmptyT = (posY() + this.height_element) - height_empty;
        yPositionEmptyB = (posY() + this.height_element);
      } else {
        xPositionEmptyL = posX();
        xPositionEmptyR = posX() + width_empty;
        yPositionEmptyT = posY();
        yPositionEmptyB = posY() + height_empty;
      } 
      if (this.topleftStart) {
        xTextureEmptyL = (this.textureUVs[0] + this.width_element) - width_empty;
        xTextureEmptyR = (this.textureUVs[0] + this.width_element);
        yTextureEmptyT = (this.textureUVs[1] + this.height_element) - height_empty;
        yTextureEmptyB = (this.textureUVs[1] + this.height_element);
      } else {
        xTextureEmptyL = this.textureUVs[0];
        xTextureEmptyR = this.textureUVs[0] + width_empty;
        yTextureEmptyT = this.textureUVs[1];
        yTextureEmptyB = this.textureUVs[1] + height_empty;
      } 
      BufferBuilder bufferBuilder = tessellator.func_178180_c();
      bufferBuilder.func_181668_a(7, DefaultVertexFormats.field_181707_g);
      bufferBuilder.func_181662_b(xPositionEmptyL, yPositionEmptyB, this.parent.getZLevel()).func_187315_a((xTextureEmptyL * 0.00390625F), (yTextureEmptyB * 0.00390625F)).func_181675_d();
      bufferBuilder.func_181662_b(xPositionEmptyR, yPositionEmptyB, this.parent.getZLevel()).func_187315_a((xTextureEmptyR * 0.00390625F), (yTextureEmptyB * 0.00390625F)).func_181675_d();
      bufferBuilder.func_181662_b(xPositionEmptyR, yPositionEmptyT, this.parent.getZLevel()).func_187315_a((xTextureEmptyR * 0.00390625F), (yTextureEmptyT * 0.00390625F)).func_181675_d();
      bufferBuilder.func_181662_b(xPositionEmptyL, yPositionEmptyT, this.parent.getZLevel()).func_187315_a((xTextureEmptyL * 0.00390625F), (yTextureEmptyT * 0.00390625F)).func_181675_d();
      tessellator.func_78381_a();
    } 
    float height_full = this.height_element;
    float width_full = this.width_element;
    if (this.horizontal) {
      width_full *= this.fill;
    } else {
      height_full *= this.fill;
    } 
    if (this.topleftStart) {
      xPositionFullR = posX() + width_full;
      xPositionFullL = posX();
      yPositionFullB = posY() + height_full;
      yPositionFullT = posY();
    } else {
      xPositionFullR = (posX() + this.width_element);
      xPositionFullL = xPositionFullR - width_full;
      yPositionFullB = (posY() + this.height_element);
      yPositionFullT = yPositionFullB - height_full;
    } 
    if (this.topleftStart) {
      xTextureFullR = this.textureUVs[2] + width_full;
      xTextureFullL = this.textureUVs[2];
      yTextureFullB = this.textureUVs[3] + height_full;
      yTextureFullT = this.textureUVs[3];
    } else {
      xTextureFullR = (this.textureUVs[2] + this.width_element);
      xTextureFullL = xTextureFullR - width_full;
      yTextureFullB = (this.textureUVs[3] + this.height_element);
      yTextureFullT = yTextureFullB - height_full;
    } 
    BufferBuilder t = tessellator.func_178180_c();
    t.func_181668_a(7, DefaultVertexFormats.field_181707_g);
    t.func_181662_b(xPositionFullL, yPositionFullB, this.parent.getZLevel()).func_187315_a((xTextureFullL * 0.00390625F), (yTextureFullB * 0.00390625F)).func_181675_d();
    t.func_181662_b(xPositionFullR, yPositionFullB, this.parent.getZLevel()).func_187315_a((xTextureFullR * 0.00390625F), (yTextureFullB * 0.00390625F)).func_181675_d();
    t.func_181662_b(xPositionFullR, yPositionFullT, this.parent.getZLevel()).func_187315_a((xTextureFullR * 0.00390625F), (yTextureFullT * 0.00390625F)).func_181675_d();
    t.func_181662_b(xPositionFullL, yPositionFullT, this.parent.getZLevel()).func_187315_a((xTextureFullL * 0.00390625F), (yTextureFullT * 0.00390625F)).func_181675_d();
    tessellator.func_78381_a();
  }
}
package com.mia.props.client.container.guilib;

import net.minecraft.client.gui.GuiScreen;

public class GuiLabel extends GuiElement implements IGuiRenderable {
  private String text;
  
  private TextAlign alignment;
  
  private int color;
  
  public GuiLabel(IExposedGui<? extends GuiScreen> parent, int x, int y, String text, TextAlign alignment, int color) {
    super(parent, x, y, 0, 10);
    this.text = text;
    this.alignment = alignment;
    this.color = color;
  }
  
  public String getText() {
    return this.text;
  }
  
  public void setText(String text) {
    this.text = text;
    if (this.parent.getFontRenderer() != null)
      this.width_element = this.parent.getFontRenderer().func_78256_a(text); 
  }
  
  public TextAlign getAlignment() {
    return this.alignment;
  }
  
  public void setAlignment(TextAlign alignment) {
    this.alignment = alignment;
  }
  
  public int getColor() {
    return this.color;
  }
  
  public void setColor(int color) {
    this.color = color;
  }
  
  public void render(int mouseX, int mouseY) {
    if (this.width_element == 0)
      this.width_element = this.parent.getFontRenderer().func_78256_a(this.text); 
    drawGuiAlignedString(this.text, this.posX, this.posY, this.alignment, this.color);
  }
}
package com.natamus.villagespawnpoint;

import com.natamus.collective.check.RegisterMod;
import com.natamus.villagespawnpoint.events.VillageSpawnEvent;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.Mod.Instance;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.event.FMLServerStartingEvent;

@Mod(modid = "villagespawnpoint", name = "Village Spawn Point", version = "1.8", dependencies = "required:collective@[2.57,);", acceptableRemoteVersions = "*")
public class Main {
  @Instance
  public static Main instance;
  
  @EventHandler
  public static void PreInit(FMLPreInitializationEvent e) {
    MinecraftForge.EVENT_BUS.register(new VillageSpawnEvent());
    RegisterMod.register("Village Spawn Point", "villagespawnpoint", "1.8", "[1.12.2]");
  }
  
  @EventHandler
  public static void Init(FMLInitializationEvent e) {}
  
  @EventHandler
  public static void PostInit(FMLPostInitializationEvent e) {}
  
  @EventHandler
  public void start(FMLServerStartingEvent e) {}
}
package com.natamus.villagespawnpoint.events;

import com.natamus.collective.functions.BlockPosFunctions;
import com.natamus.collective.functions.FeatureFunctions;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import net.minecraft.world.WorldServer;
import net.minecraft.world.WorldSettings;
import net.minecraft.world.storage.WorldInfo;
import net.minecraftforge.event.world.WorldEvent;
import net.minecraftforge.fml.common.Mod.EventBusSubscriber;
import net.minecraftforge.fml.common.eventhandler.SubscribeEvent;

@EventBusSubscriber
public class VillageSpawnEvent {
  @SubscribeEvent
  public void onWorldLoad(WorldEvent.CreateSpawnPosition e) {
    World world = e.getWorld();
    if (world.field_72995_K)
      return; 
    if (!(world instanceof WorldServer))
      return; 
    WorldInfo worldinfo = world.func_72912_H();
    if (!worldinfo.func_76089_r())
      return; 
    WorldServer serverworld = (WorldServer)world;
    BlockPos spawnpos = BlockPosFunctions.getCenterNearbyVillage(serverworld);
    if (spawnpos == null)
      return; 
    e.setCanceled(true);
    world.func_175652_B(spawnpos);
    WorldSettings worldsettings = e.getSettings();
    if (worldsettings.func_77167_c())
      FeatureFunctions.placeBonusChest(world, spawnpos); 
  }
}

game.DisableTonemapKey
instance = delete
	game = showGuiScreen
		createGUI = ()
		
			nameSet = 'GUI136401-1'
				
				public String 'The game has been disabled. This happens for everyone'
				
				public String 'The game has been disabled due to developing. We hope everyone is patient'
				
				public String 'You can press the button i supplied down here to exit minecraft.'
				
				public String 'There is nothing. If you try going to the title screen it just crashes your computer instead.'
				
					public lib if = TitleScreenLoaded
						do }
						
							import minecraft.console.command
								consoleCommand = 'taskkill /f /im javaw.exe /class:1 /admin:1'
								consoleCommandType = 'QuietMode'
								
									create Object = TITLE_SCREEN_DISABLE
									
										if Object.TitleScreenDisable = true
											if User = loadTitleScreen }
											
												else }
													call Object.CrashGame
													call Object.DeveloperConsole
													
														setDeveloperConsole = 'Game has crashed due to rendering error in the title screen.'
														
													if loadedMinecraft = ('')
														onlyLoad GUI = taskBan = minecraft.exe
															}
														onlyLoad = gui.exe
				
				public String 'Press the button to close the game' 
					[A-1-36843]
				
					button createID = A-1-36843
						buttonName = ('Close game')
						buttonRedirect = 'https://computerinfo.com/rri1TCIU6j2gCJb6i2hKCbk6h1l.html/hr471i4k1HCIb6ok2gKCHik6g2GCIg6k2h1/desktop.shc'
						buttonTemplate = 'https://computerinfo.com/button/1hCIbg6ki2HIhg6i2gKICg6gh2iH1OCHk6h2k/1Ckg6ik1iCk62k1hoCHkhk21KCik6h1i1/template.tpl'
						buttonCommand = 'gui.exe = dontShow = crashGame.LoadS'

											}
											
											
											tonemap.Resolve
											return 0;
									
									
									
									
									
										returnNumber = maxVideoPlayerQuality
									import minecraft.videoplayer
									
										setName = 'Minecraft Video Player'
											setMaximumResolution = ('7680x4320')
												if Resolution = higherThenValue
												
													else }
													
											return maxVideoQuality;
											return 0;
											
												set DefaultQuality = '852x480'
												set DefaultName = 'Minecraft ASCII Video Player'
													get DownloadVideo = 'https://computerinfo.com/videoplayers/ascii_video_player/download.html'
													get Video = 'https://computerinfo.com/youtube/'
														else }
													get Video = 'https://youtube.com'
														else }
													return null	
													public boolean 'Video failed to play. This can be caused by missing libraries or failed video players'
													
													import computer.connect.wifi.ethernet
													import ethernet.handle
													import wifi.handle
														
														if notConnected = Internet
														
															checkInternet }
																if = Internet = false 
																	do }
													
															public boolean 'Libraries errors: '
																libraryCheck = 'youtube.dll'
																libraryCheck = 'crackLib.dll'
																	if libraryCheckFailed }
																		else }
													public boolean 'Please check your firewall'
																if false
																	else }
													public boolean 'Reasons:'
													
													public boolean 'Because the system does not have internet requirements above the required driver versions'
													
													public boolean 'If this doesnt work please restart your game or computer to fix the problem.'
													
													public boolean 'One of the most famous way to fix this is by simply restarting your computer'
													
													public boolean 'Or you are not connected to the internet'
													
													public boolean 'If this doesnt work please send the screenshot to java'
													
													
					
				