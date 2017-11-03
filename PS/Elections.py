import sys, getopt, re

#main function goes here
#print len(sys.argv)
def getCandidates(f):
    data = []
    try:
        file = open(f, "r")
        obj = file.readlines()
        for s in obj:
            #print s
	    data.append(s.strip())
    except IOError:
        print "Cannot Find The File Specified! Please Check File Name"
    #print data
    return data
#getCandidates(sys.argv[1])


def parseVote(s):
    
    minusValues = re.compile('\s*-\d+$')
    #minusValues = re.compile('^-?\d+$')
    word = re.compile('\s*[A-Za-z]\s*')
    nonDigit= re.compile('\s*[0-9]+[^0-9][0-9]\s*')
    
    digits=re.compile('\s*[0-9](\.*|\s*)')
    spaceDig=re.compile('\s*[0-9]+\s')
    #print 's value...', s
    if  s == "" or s==" ":
		#print 'zero'
		return 0
    elif  minusValues.match(s) or word.match(s) or nonDigit.match(s) :
		#print '-1'
		return -1
    elif digits.match(s)!=None or spaceDig.match(s) != None:
		#print 's'
		return s.strip()
    else:
                print 'last else'
        
#print parseVote("-00")


def parsePaper(pattern, n):
	returnList=[]
	
	ls = re.sub(r'\s',' ', pattern).split(',')
	#ls= pattern
	#print 'data...',ls
	if len(ls)<=n:
            
		#for l in list
		for i in range(len(ls)):
			returnList.append(parseVote(ls[i]))
		#print 'data return..',returnList


		if -1 in returnList:
			return ([],"non-digits")
			#print ([],"non-digits")
		elif 0 in returnList:
			return ([],"blank")
			#print ([],"blank")
                else:
                        #print 'final result'
                        return (returnList,'')
			
	else:
		return ([],"too long")
		print ([],"too long")
	
#print parsePaper("no", 5)    

"""conditions:
	getPapers(f, n):
	this returns a list containing the ballot papers from the file f,
	in an election with n candidates.
	Treat each line of the file as a seperate paper. If f doesn't exist,
	print an appropriate error and return empty list
	Ex: getPapers("testFile.txt", 4) =[([1,2,3,4], ""), ([], "blank"), 
	([0,23,0], ""), ([], "non-digits"), ([], "non-digits"),
	([4,0,4,4,], ""), ([], "too long"), ([], "blank")]
    """

def getPapers(testFile, n):
	data = []
	s = ""
	try:
		file = open(testFile, "r")
		obj = file.readlines()
		for n,line in enumerate(obj, 1):
			line = line.rstrip()
			#line = "\""+line+"\""
			#print line
			#print parsePaper(line, 9)
			data.append(parsePaper(line, 9))
	except IOError:
			print "Cannot Find The File Specified!"
	
	print 'final result data----',data
			
#getPapers("papers.txt", 2)

def normalisePaper(p, n):
	d = 0
	data = []
	m = len(str(max(p)))
	#print m
	for r in range(len(p)):
		d = ( d + p[r] )
	#print d
	
	for i in range(n):
		if len(p)>i:
			data.append(round(float(p[i])/d,m))
			#print round(float(p[i])/d,2)
		else:			
			#print '0'
			data.append(round(float(0),m))
	#print data
	return data
#normalisePaper([17,48,19,2711,44],7)
#normalisePaper([17,48,19,2711,44],7)

def normalisePapers(ps, n):
	for i in range(len(ps)):
		print ps[i]
		print normalisePaper(ps[i],len(ps[i]))
	#for i in range(len(ps)):
	#	print normalisePaper(ps[i])

#normalisePapers([[2], [7,2,1]], 3)	
returnOfGC = getCandidates(sys.argv[1])
#print len(returnOfGC)
returnOfGP = getPapers(sys.argv[2],len(returnOfGC))


"""def countVotes(cs, ps):
    cs = getCandidates(sys.argv[1])
    ps = normalisePapers([[2], [7,2,1]], 3)
"""


#def printCount():
