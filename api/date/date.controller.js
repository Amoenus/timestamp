'use strict';

// Parses a string and returns a json object
exports.parse = function(req, res) 
{
  var millisecondsUnix = TryConvertToMilliseconds(req.params.date);

  var parsedDate = new Date(millisecondsUnix);
  
  var natural = GetNaturalResult(millisecondsUnix, parsedDate);
                                
  var unix = GetUnixResult(millisecondsUnix);

  return res.json({unix, natural});
  
function TryConvertToMilliseconds(input) 
  {
    var millisecondsUnix = Number(input) * 1000;
    
    if (isNaN(millisecondsUnix)) 
    {
      millisecondsUnix = Date.parse(input);
      
      millisecondsUnix = isNaN(millisecondsUnix) ? null : millisecondsUnix;
    }
    
    return millisecondsUnix;
  }
  
  function GetUnixResult(millisecondsUnix)
  {
    return millisecondsUnix === null 
                              ? null 
                              : millisecondsUnix / 1000;
  }
  
  function GetNaturalResult(millisecondsUnix, parsedDate)
  {
      const options = 
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  };
                  
    return millisecondsUnix === null 
                               ? null 
                               : parsedDate.toLocaleString('en-US', options);
  }
};

