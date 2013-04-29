require "json"

module LiquidExtend
  def lastchar(input)
    input[-1]
  end
  def json(input)
    input.to_json
  end
  def fixnewline(input)
    input.gsub("\n", "").gsub("<link", "\n<link")
  end
  
  Liquid::Template.register_filter self
end
