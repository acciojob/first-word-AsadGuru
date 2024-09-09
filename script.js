function firstWord(s) {
  // your code here
	// Find the index of the first space
            const spaceIndex = s.indexOf(' ');

            // If there's no space, return the entire string
            if (spaceIndex === -1) {
                return s;
            }

            // Otherwise, return the substring up to the first space
            return s.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
